# Genera presentazione-poltrone.svg: la sala del cinema in scala di grigi attorno al vecchio logo.
# Uso: python3 strumenti/genera-poltrone.py presentazione-poltrone.svg
# Coordinate nel sistema del vecchio logo (amelie-logo-vecchio.JPG, 600x843): il logo occupa (0,0)-(600,843).
import sys

X0, Y0, X1, Y1 = -2400, -700, 3000, 1600          # estensione della scena
def grigio(hexcol):
    r, g, b = (int(hexcol[i:i + 2], 16) for i in (1, 3, 5))
    v = round(.2126 * r + .7152 * g + .0722 * b)  # luminanza (come il filtro "bianco e nero")
    return '#%02x%02x%02x' % (v, v, v)

MURO = grigio('#a9c499')
POLTRONA, RIFLESSO = grigio('#ed1b24'), grigio('#f22e32')
FILA_DAVANTI, RIFLESSO_DAVANTI = '#2e2e2e', '#3d3d3d'

def schienale(x, top, larghezza, raggio, fondo):
    return (f'M{x:.1f},{fondo} V{top + raggio:.1f} A{raggio:.1f},{raggio:.1f} 0 0 1 {x + raggio:.1f},{top:.1f} '
            f'H{x + larghezza - raggio:.1f} A{raggio:.1f},{raggio:.1f} 0 0 1 {x + larghezza:.1f},{top + raggio:.1f} V{fondo} Z')

def poltrona(x, top, larghezza, raggio, colore, riflesso, banda):
    # sagoma con una sottile banda più chiara lungo il bordo superiore (come nel disegno originale)
    return (f'<path d="{schienale(x, top, larghezza, raggio, Y1)}" fill="{riflesso}"/>'
            f'<path d="{schienale(x + banda * .6, top + banda, larghezza - banda * 1.2, raggio - banda * .6, Y1)}" fill="{colore}"/>')

# Fila di Amélie: schienale largo 575.6, bordo a 513.5, raggio 183.7, passo 560 (misurati sul disegno)
LARG, TOP, RAGGIO, PASSO = 575.6, 513.5, 183.7, 560
fila = [poltrona(12.7 + n * PASSO, TOP, LARG, RAGGIO, POLTRONA, RIFLESSO, 9) for n in range(-5, 6) if n != 0]

# Fila più vicina allo schermo: più grande (×1.25) e più scura, davanti alle gambe di Amélie
K = 1.25
L2, R2, P2, TOP2 = LARG * K, RAGGIO * K, PASSO * K, 770
davanti = [poltrona(300.5 - L2 / 2 + n * P2, TOP2, L2, R2, FILA_DAVANTI, RIFLESSO_DAVANTI, 11) for n in range(-4, 5)]

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{X0} {Y0} {X1 - X0} {Y1 - Y0}" preserveAspectRatio="none">
<!-- Sala del cinema in bianco e nero attorno al vecchio logo (modalità presentazione). Generato da strumenti/genera-poltrone.py: le
     misure delle poltrone vengono dal disegno originale, così combaciano con quelle rosse ai bordi del logo. -->
<defs><radialGradient id="buio" gradientUnits="userSpaceOnUse" cx="300" cy="420" r="2300">
<stop offset=".22" stop-color="#000" stop-opacity="0"/><stop offset=".62" stop-color="#000" stop-opacity=".45"/>
<stop offset="1" stop-color="#000" stop-opacity=".8"/></radialGradient></defs>
<rect x="{X0}" y="{Y0}" width="{X1 - X0}" height="{Y1 - Y0}" fill="{MURO}"/>
{''.join(fila)}
{''.join(davanti)}
<rect x="{X0}" y="{Y0}" width="{X1 - X0}" height="{Y1 - Y0}" fill="url(#buio)"/>
</svg>
'''
open(sys.argv[1], 'w', encoding='utf-8').write(svg)
print('colori: muro', MURO, 'poltrona', POLTRONA, 'riflesso', RIFLESSO, '| dimensione', len(svg), 'byte')
