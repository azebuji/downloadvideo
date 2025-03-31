const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true }); //Torna vísível ou não a execução do navegador
    const page = await browser.newPage();

    for (let i = 17; i <= 26; i++) {
        const episodeNumber = i < 10 ? `0${i}` : i;
        const url = `https://link_do_site_a_ser_baixado/${episodeNumber}.mp4`;

        console.log(`Acessando ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle2' });

        // espera o video carregar
        console.log(`Esperando o vídeo carregar...`);
        await page.waitForSelector('video source');

        // Pega a url de dentro do source da tag video
        const videoUrl = await page.evaluate(() => {
            const source = document.querySelector('video source');
            return source ? source.src : null;
        });

        if (videoUrl) {
            console.log(`Baixando episódio ${episodeNumber}...`);

            // Aqui eu simulo um clique na tag a para baixar
            await page.evaluate((videoUrl, episodeNumber) => {
                const a = document.createElement('a');
                a.href = videoUrl;
                a.download = `School_Rumble_nigaki_Episodio_${episodeNumber}.mp4`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }, videoUrl, episodeNumber);

            console.log(`Episódio ${episodeNumber} baixado com sucesso!`);
        } else {
            console.log(`Erro ao encontrar a tag <source> no episódio ${episodeNumber}`);
        }

        // Aqui pode alterar a pausa para o tempo que você quiser
        await new Promise(resolve => setTimeout(resolve, 45000));
        //Cria uma promisse e depois de 30 segundos resolve ela com o resolve da função do new Promise
    }

    await browser.close();
})();