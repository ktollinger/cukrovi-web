# Sladké Vánoce – Webová prezentace cukroví & raw dezertů

Jednoduchá, bleskově rychlá statická prezentace (Astro + Tailwind CSS) navržená v prvé řadě pro **mobilní telefony** (Mobile-First) s přímou integrací objednávek přes **WhatsApp** a telefon.

---

## 📱 Jak spustit živý náhled přímo pro mobilní telefon

Pokud sedíte s kamarádkou u stolu a chcete jí web ukázat na jejím vlastním telefonu (v reálném čase):

1. Připojte MacBook i mobil na stejnou Wi-Fi (nebo hotspot z mobilu).
2. Spusťte vývojový server s přepínačem `--host`:
   ```bash
   pnpm dev --host
   ```
3. Terminál vypíše Network URL, např.:
   ```text
   Network: http://192.168.1.50:4321/
   ```
4. Zadejte tuto adresu do Safari/Chrome na mobilu. Jakákoli změna textu nebo fotky v kódu se na mobilu okamžitě sama překreslí.

---

## 🚀 Jak nasadit na veřejné URL (GitHub Pages)

V repozitáři je připraven nativní workflow `.github/workflows/deploy.yml` (`actions/deploy-pages@v4`).

1. Vytvořte na svém GitHubu nový repozitář (např. `rawtik`).
2. Přidejte remote a pushněte:
   ```bash
   git remote add origin git@github.com:ktollinger/rawtik.git
   git branch -M main
   git push -u origin main
   ```
3. V nastavení GitHub repozitáře (**Settings $\rightarrow$ Pages $\rightarrow$ Build and deployment**):
   - Vyberte jako Source: **GitHub Actions**.
4. Během 30–45 sekund bude web dostupný na adrese:  
   `https://ktollinger.github.io/rawtik/`

---

## 📸 Jak nasadit vyfocené fotky (Capture One $\rightarrow$ Web)

1. Po focení vyexportujte z Capture One vybrané fotografie ve formátu **WebP** (nebo JPEG v kvalitě 80–85 %):
   - **Hero snímek**: na šířku, cca 1920–2400 px, s volným místem na text v jedné třetině.
   - **Dárková krabička**: čtverec (1:1) nebo výška (4:5), cca 1200 px.
   - **Jednotlivé druhy cukroví**: čtverec (1:1), cca 800–1000 px.
   - **Fotka cukrářky / ruce při zdobení**: na výšku (4:5), cca 1200 px.
2. Uložte je do složky `public/images/`.
3. V souboru `src/pages/index.astro` nahraďte placeholdery cestami k fotkám (např. `/rawtik/images/hero.webp`).

---

## ⚙️ Kde upravit kontakty a nabídku

Všechna data jsou přehledně na začátku souboru [src/pages/index.astro](src/pages/index.astro):
- `phoneNumber`: Telefonní číslo pro volání
- `whatsappLink`: Telefonní číslo a předvyplněná zpráva pro WhatsApp
- `packages`: Seznam vánočních krabiček, gramáže, ceny a složení
- `cookieGallery`: Seznam nafocených druhů s popisky chutí
- `rawCakes`: Stálý sortiment raw dortů
