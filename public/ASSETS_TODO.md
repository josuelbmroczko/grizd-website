# Assets pendentes

Estes arquivos foram citados no briefing mas ficam em links do Google Drive
(fora do alcance de rede deste ambiente). Baixe e coloque nos caminhos abaixo
— os componentes já têm comentários indicando exatamente onde trocar.

| Arquivo | Onde colocar | Usado em |
|---|---|---|
| Foto de perfil (Home + About) | `/public/images/kristi-portrait.jpg` | `Hero.tsx`, `AboutMe.tsx` |
| Foto de fundo do estúdio | `/public/images/studio-bg.jpg` | `Hero.tsx` |
| Currículo (PDF) | `/public/cv/kristi-skendaj-cv.pdf` | `Resume.tsx` |
| Logos das empresas | `/public/images/logos/*.png` | `Companies.tsx` |

Links originais do briefing (Google Drive):
- Fotos: https://drive.google.com/drive/folders/1ENdT7q03pXIipxbNCvOKU_5uB7sTp78_?usp=sharing
- CV: https://drive.google.com/file/d/1Do2FaVMiCfAtuBAZ1pSBsd95GxYKVlkW/view?usp=sharing

Depois de adicionar as imagens, troque os blocos de placeholder (divs com
gradiente/iniciais "KS") por `<Image src="..." alt="..." fill />` do
`next/image`, importado de `"next/image"`.
