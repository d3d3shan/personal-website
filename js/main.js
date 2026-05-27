const projectCards = document.querySelectorAll('.project-card');
const avatar = document.querySelector('.avatar-img');
const langToggle = document.querySelector('.lang-toggle');

const i18n = {
  zh: {
    langButton: 'English', navEducation: '教育荣誉', navProjects: '项目经历', navSkills: '技能', navContact: '联系',
    heroEyebrow: 'Fudan University · Electronic Information Science and Technology', name: '董山',
    lead: '复旦大学电子信息科学与技术（光子计划）本科生，面向具身智能与机器人方向，具备视觉算法、嵌入式开发、硬件调试与系统集成经验。',
    schoolLabel: '学校', schoolValue: '复旦大学', majorLabel: '专业', majorValue: '电子信息科学与技术（光子计划）',
    focusLabel: '方向', focusValue: '具身智能 · 机器人视觉 · 嵌入式系统', educationEyebrow: 'Education & Honors', educationTitle: '教育与荣誉',
    educationCardTitle: '教育背景', educationCardBody: '复旦大学 · 电子信息科学与技术（光子计划）', educationCardMuted: '重点能力：电子信息、光电系统、嵌入式开发、机器人视觉与 AI/ML 应用。',
    honor1Title: '全国大学生数学竞赛', honor1Body: '上海赛区一等奖（2025）', honor2Title: '全国大学生光电设计竞赛', honor2Body: '东部区赛一等奖', honor3Title: '全国大学生光电设计竞赛', honor3Body: '总决赛全国三等奖', honor4Title: '全国大学生电子设计竞赛', honor4Body: '省二等奖', honor5Title: '实用新型专利', honor5Body: '两项', honor6Title: '英语能力', honor6Body: '英语四级、六级优异成绩',
    projectsEyebrow: 'Research & Projects', projectsTitle: '科研与项目经历', proj1Meta: '竞赛项目 · 组员 · 光电/机器人视觉', proj1Title: '全国大学生光电设计竞赛', proj1Heading: '激光打靶与视觉系统调试', proj1Body: '围绕激光打靶任务完成机器人视觉链路与现场系统调试，使用 ROS、Jetson-Nano、YOLO 与 MaixCAM 完成视觉识别、相机调试、控制联调和结构外壳制作。',
    skillsEyebrow: 'Technical Stack', skillsTitle: '技能', skill1Title: '编程', skill1Body: 'C/C++、Python、Verilog', skill2Title: '硬件与嵌入式', skill2Body: 'FPGA 开发、电路设计、单片机、STM32、MaixCAM、3D 打印', skill3Title: '软件工具', skill3Body: 'Matlab、VSCode、QT、Keil、SolidWorks、MaixVision', skill4Title: 'AI / ML', skill4Body: 'SNN、YOLO、RoBERTa 微调、SmolVLA 操作', footerCopyright: '© 2026 董山'
  },
  en: {
    langButton: '中文', navEducation: 'Education', navProjects: 'Projects', navSkills: 'Skills', navContact: 'Contact',
    heroEyebrow: 'Fudan University · Electronic Information Science and Technology', name: 'Shan Dong',
    lead: 'Undergraduate in Electronic Information Science and Technology (Photon Program) at Fudan University, focused on embodied intelligence and robotics with hands-on experience in visual algorithms, embedded systems, hardware debugging, and integration.',
    schoolLabel: 'University', schoolValue: 'Fudan University', majorLabel: 'Major', majorValue: 'Electronic Information Science and Technology (Photon Program)',
    focusLabel: 'Focus', focusValue: 'Embodied AI · Robot Vision · Embedded Systems', educationEyebrow: 'Education & Honors', educationTitle: 'Education & Honors',
    educationCardTitle: 'Academic Background', educationCardBody: 'Fudan University · Electronic Information Science and Technology (Photon Program)', educationCardMuted: 'Core strengths: electronics, optoelectronic systems, embedded development, robotics vision, and AI/ML applications.',
    honor1Title: 'National College Mathematics Competition', honor1Body: 'First Prize (Shanghai), 2025', honor2Title: 'National Optoelectronic Design Contest', honor2Body: 'First Prize, East China Region', honor3Title: 'National Optoelectronic Design Contest', honor3Body: 'Third Prize, National Finals', honor4Title: 'National Electronics Design Contest', honor4Body: 'Provincial Second Prize', honor5Title: 'Utility Model Patents', honor5Body: 'Two', honor6Title: 'English Proficiency', honor6Body: 'Strong CET-4 and CET-6 scores',
    projectsEyebrow: 'Research & Projects', projectsTitle: 'Research & Projects', proj1Meta: 'Competition · Team Member · Optoelectronics / Robot Vision', proj1Title: 'National Optoelectronic Design Contest', proj1Heading: 'Laser Targeting and Vision System Tuning', proj1Body: 'Built and tuned a full robotics vision pipeline for laser-targeting tasks, using ROS, Jetson Nano, YOLO, and MaixCAM for detection, camera tuning, control integration, and enclosure prototyping.',
    skillsEyebrow: 'Technical Stack', skillsTitle: 'Skills', skill1Title: 'Programming', skill1Body: 'C/C++, Python, Verilog', skill2Title: 'Hardware & Embedded', skill2Body: 'FPGA, circuit design, MCUs, STM32, MaixCAM, 3D printing', skill3Title: 'Software Tools', skill3Body: 'MATLAB, VSCode, Qt, Keil, SolidWorks, MaixVision', skill4Title: 'AI / ML', skill4Body: 'SNN, YOLO, RoBERTa fine-tuning, SmolVLA operation', footerCopyright: '© 2026 Shan Dong'
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[lang][key]) node.textContent = i18n[lang][key];
  });
  localStorage.setItem('lang', lang);
}
if (avatar) avatar.addEventListener('error', () => { avatar.style.display = 'none'; });
projectCards.forEach((card) => {
  const button = card.querySelector('.project-toggle');
  button.addEventListener('click', () => {
    const isOpen = card.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
const initialLang = localStorage.getItem('lang') || 'zh';
setLanguage(initialLang);
if (langToggle) langToggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh'));
