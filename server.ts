import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Server-side secret (never bundled or exposed to client code)
// Change via the YZWY_SECRET_PASSWORD environment variable (replacing SET_PASSWORD_HERE)
const envPassword = process.env.YZWY_SECRET_PASSWORD?.trim();
const RAW_SECRET =
  envPassword && envPassword !== 'SET_PASSWORD_HERE' ? envPassword : 'Kochy';

function verifyPassword(candidate: string): boolean {
  const normalizedCandidate = Buffer.from(candidate.trim().toLowerCase(), 'utf8');
  const normalizedExpected = Buffer.from(RAW_SECRET.trim().toLowerCase(), 'utf8');

  if (normalizedCandidate.length !== normalizedExpected.length) {
    return false;
  }

  return crypto.timingSafeEqual(normalizedCandidate, normalizedExpected);
}

async function startServer() {
  const app = express();
  app.use(express.json());

  app.post('/api/private-letter/unlock', (req, res) => {
    const submitted = typeof req.body?.password === 'string' ? req.body.password : '';

    if (!verifyPassword(submitted)) {
      res.status(401).json({
        unlocked: false,
        error: 'Not quite, this little secret is reserved for Yzwy! ♡',
      });
      return;
    }

    res.json({
      unlocked: true,
      letter: {
        heading: 'Only for You, Yzwy',
        paragraphs: [
          'اخيراً يمدي أسولف على راحتي!',
          'يا هلا وغلا باللي دخلوا 18 سنة ❤️',
          'مدري متى بتشوفين هالرسالة، بس أتمنى تشوفينها، وأتمنى بعد تكونين بكامل صحتج وعافيتج.',
          'كل عام وانتِ بخير وياعسى عمرج مديد مهندستنا العزيزه. 🎂',
          'وأتمنى هالسنة تكون كلها إنجازات أكثر من اللي راحت واللي قبلها، وأتمنى تحصلين اللي تبينه، وكل اللي تتمنينه يصير حقيقة ويتحقق.',
          'الله يحفظج ويحافظ عليج، ويديمج في حياة أحبابج، ويخلي لج كل اللي تحبينهم. 💗',
        ],
        signature: 'People You Know',
      },
    });
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      const indexHtml = path.join(distDir, 'index.html');
      if (fs.existsSync(indexHtml)) {
        res.sendFile(indexHtml);
      } else {
        res.status(404).send('Build not found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

void startServer();
