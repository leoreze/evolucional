
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

const v1Dir = path.join(__dirname, "versao1");
const v2Dir = path.join(__dirname, "versao2");

app.get("/", (_req, res) => {
  res.send(`
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Evolucional • versões</title>
        <style>
          :root{--blue:#08017F;--purple:#762367;--coral:#F4494B}
          *{box-sizing:border-box}body{font-family:Inter,Arial,sans-serif;background:
          radial-gradient(circle at 0% 0%, rgba(118,35,103,.20), transparent 28%),
          radial-gradient(circle at 100% 0%, rgba(244,73,75,.14), transparent 24%),
          linear-gradient(180deg,#060415 0%, #0b0820 34%, #110b28 62%, #140d1c 100%);
          color:#fff;margin:0;min-height:100vh}
          .wrap{max-width:1100px;margin:0 auto;padding:32px 20px}
          .hero{min-height:100vh;display:grid;place-items:center}
          .box{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:stretch}
          .panel{padding:32px;border-radius:28px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);backdrop-filter:blur(16px)}
          h1{font-size:clamp(2.8rem,6vw,5.5rem);line-height:.9;letter-spacing:-.06em;margin:0 0 16px}
          p{color:#cfcbe6;line-height:1.8;margin:0 0 18px}
          .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}
          a{display:inline-flex;align-items:center;justify-content:center;padding:14px 18px;border-radius:16px;text-decoration:none;font-weight:800}
          .a1{background:linear-gradient(135deg,var(--blue),var(--purple));color:#fff}
          .a2{background:#fff;color:var(--blue)}
          .a3{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.10)}
          .card{padding:22px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);margin-bottom:14px}
          .card strong{display:block;font-size:1.08rem;margin-bottom:6px}
          .small{font-size:.92rem;color:#bdb9d9}
          @media (max-width:900px){.box{grid-template-columns:1fr}}
        </style>
      </head>
      <body>
        <div class="wrap hero">
          <div class="box">
            <div class="panel">
              <div class="small">Publicação pronta no Render</div>
              <h1>Evolucional<br/>duas versões</h1>
              <p>Projeto preparado para servir duas propostas do site em rotas separadas, facilitando comparação, validação interna e apresentação para diretoria.</p>
              <div class="actions">
                <a class="a1" href="/versao1/">Abrir /versao1</a>
                <a class="a2" href="/versao2/">Abrir /versao2</a>
                <a class="a3" href="/apresentacao/">Abrir /apresentacao</a>
              </div>
            </div>
            <div class="panel">
              <div class="card">
                <strong>/versao1</strong>
                <div class="small">Versão clara / editorial</div>
              </div>
              <div class="card">
                <strong>/versao2</strong>
                <div class="small">Versão dark / premium</div>
              </div>
              <div class="card">
                <strong>/apresentacao</strong>
                <div class="small">Página comparativa com links rápidos para as duas versões</div>
              </div>
              <div class="card">
                <strong>/health</strong>
                <div class="small">Healthcheck para validar o deploy</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.get("/apresentacao", (_req, res) => {
  res.send(`
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Evolucional • apresentação</title>
        <style>
          :root{--blue:#08017F;--purple:#762367;--coral:#F4494B}
          *{box-sizing:border-box}body{font-family:Inter,Arial,sans-serif;background:#0b0820;color:#fff;margin:0}
          .wrap{max-width:1280px;margin:0 auto;padding:28px 20px}
          h1{font-size:clamp(2rem,4vw,4rem);line-height:.95;letter-spacing:-.05em;margin:0 0 12px}
          p{color:#cfcbe6;line-height:1.8}
          .top{display:flex;justify-content:space-between;gap:16px;align-items:end;flex-wrap:wrap;margin-bottom:22px}
          .actions{display:flex;gap:12px;flex-wrap:wrap}
          a{display:inline-flex;align-items:center;justify-content:center;padding:12px 16px;border-radius:14px;text-decoration:none;font-weight:800}
          .a1{background:linear-gradient(135deg,var(--blue),var(--purple));color:#fff}
          .a2{background:#fff;color:var(--blue)}
          .grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
          .frame{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:16px}
          .frame strong{display:block;margin-bottom:12px}
          iframe{width:100%;height:820px;border:0;border-radius:16px;background:#fff}
          @media (max-width:980px){.grid{grid-template-columns:1fr} iframe{height:700px}}
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="top">
            <div>
              <h1>Apresentação das versões</h1>
              <p>Use esta página para comparar as duas propostas lado a lado e decidir qual rota seguir.</p>
            </div>
            <div class="actions">
              <a class="a1" href="/versao1/">Abrir /versao1</a>
              <a class="a2" href="/versao2/">Abrir /versao2</a>
            </div>
          </div>
          <div class="grid">
            <div class="frame">
              <strong>Versão 1</strong>
              <iframe src="/versao1/"></iframe>
            </div>
            <div class="frame">
              <strong>Versão 2</strong>
              <iframe src="/versao2/"></iframe>
            </div>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.use("/versao1", express.static(v1Dir));
app.use("/versao2", express.static(v2Dir));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", routes: ["/versao1", "/versao2", "/apresentacao"] });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
