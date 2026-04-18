const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/pages/AboutUs.jsx',
  'src/pages/WhyUs.jsx',
  'src/pages/Contact.jsx',
  'src/pages/services/MineralSourcing.jsx',
  'src/pages/services/DueDiligence.jsx',
  'src/pages/services/TransactionManagement.jsx',
  'src/pages/services/AdvisoryServices.jsx',
  'src/pages/services/MiningAcquisitions.jsx',
  'src/pages/services/InvestmentAdvisory.jsx'
];

const replacements = [
  { search: /bg-slate-50/g, replace: 'bg-[#091123]' },
  { search: /bg-white/g, replace: 'bg-[#1E293B]' },
  { search: /text-slate-900/g, replace: 'text-white' },
  { search: /text-[#091123]/g, replace: 'text-white' }, // Handle manual navy text from Contact
  { search: /text-slate-600/g, replace: 'text-slate-300' },
  { search: /text-slate-700/g, replace: 'text-slate-300' },
  { search: /text-slate-500/g, replace: 'text-slate-400' },
  { search: /border-slate-200/g, replace: 'border-[#1E293B]' },
  { search: /bg-amber-50\/50/g, replace: 'bg-[#1E293B]/50' },
];

for (const relPath of filesToFix) {
  const absolutePath = path.join(process.cwd(), relPath);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    
    for (const rule of replacements) {
      content = content.replace(rule.search, rule.replace);
    }
    
    fs.writeFileSync(absolutePath, content, 'utf8');
    console.log(`Updated: ${relPath}`);
  } else {
    console.warn(`Not found: ${relPath}`);
  }
}
