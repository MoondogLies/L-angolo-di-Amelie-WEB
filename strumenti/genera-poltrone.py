# Genera la sala del cinema in scala di grigi attorno al vecchio logo (modalità presentazione):
#   presentazione-poltrone.svg         muro e file di poltrone DIETRO il logo (fila di Amélie e file più lontane)
#   presentazione-poltrone-davanti.svg fila più vicina allo schermo, mostrata SOPRA il logo (si sovrappone al disegno)
# Uso: python3 strumenti/genera-poltrone.py   (dalla cartella principale del sito)
#
# Coordinate nel sistema del vecchio logo (amelie-logo-vecchio.JPG, 600x843): il logo occupa (0,0)-(600,843).
# Le misure della poltrona di Amélie vengono dal disegno originale, così le poltrone grigie combaciano con
# gli spicchi rossi delle poltrone vicine ai bordi del logo.
# Prospettiva: ogni fila è la fila di Amélie ingrandita/rimpicciolita attorno a un punto di fuga sopra il disegno.

X0, Y0, X1, Y1 = -2400, -700, 3000, 1600          # estensione della scena (va d'accordo con home.css)
FUGA_X, FUGA_Y = 300.5, -500                      # punto di fuga, centrato su Amélie
RIDUZIONE = .8                                    # ogni fila più lontana è l'80% di quella davanti

def grigio(hexcol):
    r, g, b = (int(hexcol[i:i + 2], 16) for i in (1, 3, 5))
    v = round(.2126 * r + .7152 * g + .0722 * b)  # luminanza (come il filtro "bianco e nero")
    return v

def hexg(v):
    v = max(0, min(255, round(v)))
    return '#%02x%02x%02x' % (v, v, v)

MURO = grigio('#a9c499')
POLTRONA, RIFLESSO = grigio('#ed1b24'), grigio('#f22e32')

# Poltrona di Amélie (misurata): schienale largo 575.6, bordo a 513.5, raggio angoli 183.7, una ogni 560
LARG, TOP, RAGGIO, PASSO, PRIMA_X = 575.6, 513.5, 183.7, 560, 12.7

def schienale(x, top, larghezza, raggio, fondo):
    return (f'M{x:.1f},{fondo} V{top + raggio:.1f} A{raggio:.1f},{raggio:.1f} 0 0 1 {x + raggio:.1f},{top:.1f} '
            f'H{x + larghezza - raggio:.1f} A{raggio:.1f},{raggio:.1f} 0 0 1 {x + larghezza:.1f},{top + raggio:.1f} V{fondo} Z')

def fila(scala, colore, riflesso, salta_centro=False, sfumatura=None):
    """Una fila di poltrone vista con la scala data (1 = fila di Amélie) rispetto al punto di fuga."""
    sx = lambda x: FUGA_X + (x - FUGA_X) * scala
    sy = lambda y: FUGA_Y + (y - FUGA_Y) * scala
    larg, raggio, banda = LARG * scala, RAGGIO * scala, 9 * scala
    top = sy(TOP)
    n_max = int((X1 - X0) / (PASSO * scala)) + 2
    pezzi = []
    for n in range(-n_max, n_max + 1):
        if salta_centro and n == 0:
            continue
        x = sx(PRIMA_X + n * PASSO)
        if x > X1 or x + larg < X0:
            continue
        pezzi.append(f'<path d="{schienale(x, top, larg, raggio, Y1)}" fill="{riflesso}"/>'
                     f'<path d="{schienale(x + banda * .6, top + banda, larg - banda * 1.2, raggio - banda * .6, Y1)}" fill="{colore}"/>')
        if sfumatura:  # stessa sagoma ricoperta dalla vignettatura (per il livello sopra il logo)
            pezzi.append(f'<path d="{schienale(x, top, larg, raggio, Y1)}" fill="{sfumatura}"/>')
    return ''.join(pezzi)

BUIO = '''<radialGradient id="buio" gradientUnits="userSpaceOnUse" cx="300" cy="420" r="2300">
<stop offset=".22" stop-color="#000" stop-opacity="0"/><stop offset=".62" stop-color="#000" stop-opacity=".45"/>
<stop offset="1" stop-color="#000" stop-opacity=".8"/></radialGradient>'''

def svg(contenuto, commento):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{X0} {Y0} {X1 - X0} {Y1 - Y0}" preserveAspectRatio="none">\n'
            f'<!-- {commento} Generato da strumenti/genera-poltrone.py -->\n<defs>{BUIO}</defs>\n{contenuto}\n</svg>\n')

# --- Livello dietro: muro, file lontane (dalla più lontana), fila di Amélie, vignettatura
file_dietro = []
for k in range(9, 0, -1):                       # 9 file dietro ad Amélie
    scala = RIDUZIONE ** k
    schiarisci = min(.55, .09 * k)              # le file lontane sfumano verso il colore del muro
    c = POLTRONA + (MURO - POLTRONA) * schiarisci
    r = RIFLESSO + (MURO - RIFLESSO) * schiarisci
    file_dietro.append(fila(scala, hexg(c), hexg(r)))
file_dietro.append(fila(1, hexg(POLTRONA), hexg(RIFLESSO)))   # fila di Amélie (al centro c'è il logo)
dietro = svg(f'<rect x="{X0}" y="{Y0}" width="{X1 - X0}" height="{Y1 - Y0}" fill="{hexg(MURO)}"/>\n'
             + '\n'.join(file_dietro) +
             f'\n<rect x="{X0}" y="{Y0}" width="{X1 - X0}" height="{Y1 - Y0}" fill="url(#buio)"/>',
             'Sala del cinema in bianco e nero, dietro al vecchio logo.')

# --- Livello davanti: la fila più vicina allo schermo, più grande e più scura, sopra il logo
davanti = svg(fila(1 / RIDUZIONE, '#2e2e2e', '#3d3d3d', sfumatura='url(#buio)'),
              'Fila di poltrone più vicina allo schermo, sopra il vecchio logo.')

open('presentazione-poltrone.svg', 'w', encoding='utf-8').write(dietro)
open('presentazione-poltrone-davanti.svg', 'w', encoding='utf-8').write(davanti)
print('dietro:', len(dietro), 'byte | davanti:', len(davanti), 'byte | bordo della fila davanti a y =',
      round(FUGA_Y + (TOP - FUGA_Y) / RIDUZIONE, 1))
