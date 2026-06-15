// Maestro University — programs & courses data
// Source: Maestro Univ Catalog.pdf (Jan 2026) + COE Maestro 2026 catalog
// Used by: programs.html

window.MAESTRO_DATA = (function () {
  "use strict";

  /* ──────────────────────────────────────────────────────────────
     PROGRAM CATALOG — every program offered at the university,
     grouped by field. `flagship` marks the primary program(s) per field.
     ────────────────────────────────────────────────────────────── */
  var PROGRAMS = {
    software: [
      { id: 'fsdc', level: 'certificate',
        name: 'Full Stack Development Certificate', credits: 18, tuition: '$12,000',
        desc: 'JS, Python, React, databases. 18 credits embed in A.S. or B.S. CS.' },
      { id: 'ascs', level: 'associate',
        name: 'A.S. Computer Science', credits: 60, tuition: '~$10,416',
        desc: 'Software dev, Python, OOP, databases, React. 20 courses.', flagship: true },
      { id: 'bscs', level: 'bachelor',
        name: 'B.S. Computer Science – Business Software Development', credits: 120, tuition: '~$20,832',
        desc: 'CS + business hybrid. Single specialty track.', flagship: true },
    ],
    business: [
      { id: 'asb', level: 'associate',
        name: 'A.S. Business', credits: 60, tuition: '~$10,416',
        desc: 'Management, marketing, accounting, economics foundations.', flagship: true },
      { id: 'bsb-gen', level: 'bachelor',
        name: 'B.S. Business – General Business', credits: 120, tuition: '~$20,832',
        desc: 'Broad business education across all functional areas.', flagship: true },
      { id: 'bsb-mgmt', level: 'bachelor',
        name: 'B.S. Business – Management / Leadership', credits: 120, tuition: '~$20,832',
        desc: 'HR, operations management, organizational behavior.' },
      { id: 'bsb-entr', level: 'bachelor',
        name: 'B.S. Business – Entrepreneurship', credits: 120, tuition: '~$20,832',
        desc: 'Venture creation, strategic entrepreneurship, startup law.' },
      { id: 'bsb-sales', level: 'bachelor',
        name: 'B.S. Business – Sales & Sales Management', credits: 120, tuition: '~$20,832',
        desc: 'Sales strategy, advertising, sales force management.' },
      { id: 'mba-entr',  level: 'master', name: 'MBA – Entrepreneurship',          credits: 36, tuition: '~$14,016', desc: 'Launching businesses and capitalizing on innovation.' },
      { id: 'mba-fin',   level: 'master', name: 'MBA – Finance',                   credits: 36, tuition: '~$14,016', desc: 'Financial theory and analytical techniques.' },
      { id: 'mba-hc',    level: 'master', name: 'MBA – Healthcare Management',     credits: 36, tuition: '~$14,016', desc: 'Healthcare admin, policy, organizational management.' },
      { id: 'mba-hr',    level: 'master', name: 'MBA – Human Resource Management', credits: 36, tuition: '~$14,016', desc: 'Strategic HRM and global talent management.' },
      { id: 'mba-it',    level: 'master', name: 'MBA – Information Technology',    credits: 36, tuition: '~$14,016', desc: 'IT management: systems, networking, DB, security.' },
      { id: 'mba-mgmt',  level: 'master', name: 'MBA – Management',                credits: 36, tuition: '~$14,016', desc: 'Leadership and management for senior roles.' },
      { id: 'mba-mktg',  level: 'master', name: 'MBA – Marketing',                 credits: 36, tuition: '~$14,016', desc: 'Marketing strategy, advertising, PR management.' },
      { id: 'mba-sales', level: 'master', name: 'MBA – Sales Management',          credits: 36, tuition: '~$14,016', desc: 'Sales force development and leadership.' },
      { id: 'mba-sl',    level: 'master', name: 'MBA – Strategic Leadership',      credits: 36, tuition: '~$14,016', desc: 'Leadership and decision-making in competitive markets.' },
    ],
    communication: [
      { id: 'asc', level: 'associate',
        name: 'A.S. Communication', credits: 60, tuition: '~$10,416',
        desc: 'Communication theory, PR, mass media, research methods.', flagship: true },
      { id: 'bac', level: 'bachelor',
        name: 'B.A. Communication', credits: 120, tuition: '~$20,832',
        desc: 'Communication theory, media, PR, cross-cultural communication.', flagship: true },
    ],
  };

  /* ──────────────────────────────────────────────────────────────
     COURSE LISTS — full curriculum per program.
     Used by the overlap views and the all-courses matrix.
     ────────────────────────────────────────────────────────────── */
  var COURSES = {
    fsdc: [
      { id: 'CS100', name: 'Coding Foundations', sch: 3 },
      { id: 'CS277', name: 'Introduction to Programming in Python', sch: 3 },
      { id: 'CS301', name: 'Front End Foundations – JavaScript', sch: 3 },
      { id: 'CS382', name: 'Principles of Database Architecture', sch: 3 },
      { id: 'CS497', name: 'Advanced Web Development – React', sch: 3 },
      { id: 'CS499', name: 'FSD Capstone Experience', sch: 3 },
    ],

    ascs: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA271', name: 'Microeconomics', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CS100', name: 'Coding Foundations', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'CS277', name: 'Introduction to Programming in Python', sch: 3 },
      { id: 'CS301', name: 'Front End Foundations – JavaScript', sch: 3 },
      { id: 'CS382', name: 'Principles of Database Architecture', sch: 3 },
      { id: 'CS384', name: 'Python Software Development', sch: 3 },
      { id: 'CS497', name: 'Advanced Web Development – React', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
    ],

    bscs: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA210', name: 'Organizational Behavior', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'BA272', name: 'Microeconomics', sch: 3 },
      { id: 'BA280', name: 'Accounting', sch: 3 },
      { id: 'BA375', name: 'Ethical Decision Making', sch: 3 },
      { id: 'BA436', name: 'International Business', sch: 3 },
      { id: 'BA448', name: 'Team Development & Motivation', sch: 3 },
      { id: 'BA490', name: 'Project Management', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CM436', name: 'Group Communication', sch: 3 },
      { id: 'CM457', name: 'Intercultural Communication', sch: 3 },
      { id: 'CS100', name: 'Coding Foundations', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'CS277', name: 'Introduction to Programming in Python', sch: 3 },
      { id: 'CS300', name: 'Network and Internet Security', sch: 3 },
      { id: 'CS301', name: 'Front End Foundations – JavaScript', sch: 3 },
      { id: 'CS382', name: 'Principles of Database Architecture', sch: 3 },
      { id: 'CS384', name: 'Python Software Development', sch: 3 },
      { id: 'CS497', name: 'Advanced Web Development – React', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'HI171', name: 'World Civilization I', sch: 3 },
      { id: 'HI172', name: 'World Civilization II', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PF499', name: 'Career Strategies', sch: 3 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
      { id: 'SO241', name: 'General Sociology', sch: 3 },
      { id: 'EL1',   name: 'Elective (CS383 or CS498)', sch: 3 },
      { id: 'EL2',   name: 'Elective (CS383 or CS498)', sch: 3 },
      { id: 'EL3',   name: 'Elective (BA/CM pool)', sch: 3 },
      { id: 'EL4',   name: 'Elective (BA/CM pool)', sch: 3 },
      { id: 'EL5',   name: 'Elective (BA/CM pool)', sch: 3 },
    ],

    asb: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA210', name: 'Organizational Behavior', sch: 3 },
      { id: 'BA220', name: 'Principles of Marketing', sch: 3 },
      { id: 'BA252', name: 'New Venture Creation', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'BA272', name: 'Microeconomics', sch: 3 },
      { id: 'BA280', name: 'Accounting', sch: 3 },
      { id: 'BA375', name: 'Ethical Decision Making', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
    ],

    // B.S. Business — General (full 120 SCH curriculum from catalog)
    bsbGen: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA210', name: 'Organizational Behavior', sch: 3 },
      { id: 'BA220', name: 'Principles of Marketing', sch: 3 },
      { id: 'BA235', name: 'Business Statistics', sch: 3 },
      { id: 'BA252', name: 'New Venture Creation', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'BA272', name: 'Microeconomics', sch: 3 },
      { id: 'BA280', name: 'Accounting', sch: 3 },
      { id: 'BA316', name: 'Cost Accounting', sch: 3 },
      { id: 'BA356', name: 'Human Resource Management', sch: 3 },
      { id: 'BA358', name: 'Production & Operations Management', sch: 3 },
      { id: 'BA375', name: 'Ethical Decision Making', sch: 3 },
      { id: 'BA410', name: 'Intro to Management Information Systems', sch: 3 },
      { id: 'BA420', name: 'Business Law', sch: 3 },
      { id: 'BA436', name: 'International Business', sch: 3 },
      { id: 'BA445', name: 'Effective Leadership', sch: 3 },
      { id: 'BA448', name: 'Team Development & Motivation', sch: 3 },
      { id: 'BA464', name: 'Marketing Strategy', sch: 3 },
      { id: 'BA471', name: 'Money and Banking', sch: 3 },
      { id: 'BA486', name: 'Business Policy', sch: 3 },
      { id: 'BA490', name: 'Project Management', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'EN221', name: 'American Literature I', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'GS210', name: 'Earth Science', sch: 3 },
      { id: 'HI171', name: 'World Civilization I', sch: 3 },
      { id: 'HI172', name: 'World Civilization II', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 3 },
      { id: 'PF499', name: 'Career Strategies', sch: 3 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
      { id: 'SO241', name: 'General Sociology', sch: 3 },
    ],

    // A.S. Communication — 60 SCH / 20 courses (per catalog p.46)
    asc: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM225', name: 'Research Methods in Communication', sch: 3 },
      { id: 'CM241', name: 'Public Relations', sch: 3 },
      { id: 'CM251', name: 'Mass Communication', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CM301', name: 'Survey of Communication', sch: 3 },
      { id: 'CM310', name: 'Communication Ethics', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN115', name: 'Technical Writing for Business', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
    ],

    bac: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA210', name: 'Organizational Behavior', sch: 3 },
      { id: 'BA220', name: 'Principles of Marketing', sch: 3 },
      { id: 'BA235', name: 'Business Statistics', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'BA420', name: 'Business Law', sch: 3 },
      { id: 'BA448', name: 'Team Development & Motivation', sch: 3 },
      { id: 'BA490', name: 'Project Management', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM225', name: 'Research Methods in Communication', sch: 3 },
      { id: 'CM241', name: 'Public Relations', sch: 3 },
      { id: 'CM251', name: 'Mass Communication', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CM301', name: 'Survey of Communication', sch: 3 },
      { id: 'CM310', name: 'Communication Ethics', sch: 3 },
      { id: 'CM346', name: 'Advertising and Promotion', sch: 3 },
      { id: 'CM425', name: 'Introduction to Media Writing', sch: 3 },
      { id: 'CM431', name: 'Communication Theory', sch: 3 },
      { id: 'CM436', name: 'Group Communication', sch: 3 },
      { id: 'CM437', name: 'Nonverbal Communication', sch: 3 },
      { id: 'CM456', name: 'Effective Communication Tools', sch: 3 },
      { id: 'CM457', name: 'Intercultural Communication', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'EN115', name: 'Technical Writing for Business', sch: 3 },
      { id: 'EN221', name: 'American Literature I', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'GS210', name: 'Earth Science', sch: 3 },
      { id: 'HI171', name: 'World Civilization I', sch: 3 },
      { id: 'HI172', name: 'World Civilization II', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PF499', name: 'Career Strategies', sch: 3 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
      { id: 'SO241', name: 'General Sociology', sch: 3 },
    ],

    // B.S. Business — Sales & Sales Management (120 SCH, ~40 courses)
    bsbSales: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA210', name: 'Organizational Behavior', sch: 3 },
      { id: 'BA220', name: 'Principles of Marketing', sch: 3 },
      { id: 'BA235', name: 'Business Statistics', sch: 3 },
      { id: 'BA252', name: 'New Venture Creation', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'BA272', name: 'Microeconomics', sch: 3 },
      { id: 'BA280', name: 'Accounting', sch: 3 },
      { id: 'BA300', name: 'Introduction to Selling', sch: 3 },
      { id: 'BA316', name: 'Cost Accounting', sch: 3 },
      { id: 'BA356', name: 'Human Resource Management', sch: 3 },
      { id: 'BA375', name: 'Ethical Decision Making', sch: 3 },
      { id: 'BA410', name: 'Intro to Management Information Systems', sch: 3 },
      { id: 'BA420', name: 'Business Law', sch: 3 },
      { id: 'BA425', name: 'Finance', sch: 3 },
      { id: 'BA436', name: 'International Business', sch: 3 },
      { id: 'BA445', name: 'Effective Leadership', sch: 3 },
      { id: 'BA448', name: 'Team Development & Motivation', sch: 3 },
      { id: 'BA464', name: 'Marketing Strategy', sch: 3 },
      { id: 'BA486', name: 'Business Policy', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CM346', name: 'Advertising and Promotion', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'EN221', name: 'American Literature I', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'GS210', name: 'Earth Science', sch: 3 },
      { id: 'HI171', name: 'World Civilization I', sch: 3 },
      { id: 'HI172', name: 'World Civilization II', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PF499', name: 'Career Strategies', sch: 3 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
      { id: 'SO241', name: 'General Sociology', sch: 3 },
    ],

    // B.S. Business — Management & Leadership (120 SCH)
    bsbMgmt: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA210', name: 'Organizational Behavior', sch: 3 },
      { id: 'BA220', name: 'Principles of Marketing', sch: 3 },
      { id: 'BA235', name: 'Business Statistics', sch: 3 },
      { id: 'BA252', name: 'New Venture Creation', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'BA272', name: 'Microeconomics', sch: 3 },
      { id: 'BA280', name: 'Accounting', sch: 3 },
      { id: 'BA316', name: 'Cost Accounting', sch: 3 },
      { id: 'BA356', name: 'Human Resource Management', sch: 3 },
      { id: 'BA358', name: 'Production & Operations Management', sch: 3 },
      { id: 'BA375', name: 'Ethical Decision Making', sch: 3 },
      { id: 'BA410', name: 'Intro to Management Information Systems', sch: 3 },
      { id: 'BA420', name: 'Business Law', sch: 3 },
      { id: 'BA436', name: 'International Business', sch: 3 },
      { id: 'BA445', name: 'Effective Leadership', sch: 3 },
      { id: 'BA448', name: 'Team Development & Motivation', sch: 3 },
      { id: 'BA456', name: 'Strategic Entrepreneurial Management', sch: 3 },
      { id: 'BA464', name: 'Marketing Strategy', sch: 3 },
      { id: 'BA486', name: 'Business Policy', sch: 3 },
      { id: 'BA490', name: 'Project Management', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'EN221', name: 'American Literature I', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'GS210', name: 'Earth Science', sch: 3 },
      { id: 'HI171', name: 'World Civilization I', sch: 3 },
      { id: 'HI172', name: 'World Civilization II', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PF499', name: 'Career Strategies', sch: 3 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
      { id: 'SO241', name: 'General Sociology', sch: 3 },
    ],

    // B.S. Business — Entrepreneurship (120 SCH)
    bsbEntr: [
      { id: 'BA201', name: 'Introduction to Business', sch: 3 },
      { id: 'BA205', name: 'Principles of Management', sch: 3 },
      { id: 'BA210', name: 'Organizational Behavior', sch: 3 },
      { id: 'BA220', name: 'Principles of Marketing', sch: 3 },
      { id: 'BA235', name: 'Business Statistics', sch: 3 },
      { id: 'BA252', name: 'New Venture Creation', sch: 3 },
      { id: 'BA271', name: 'Macroeconomics', sch: 3 },
      { id: 'BA272', name: 'Microeconomics', sch: 3 },
      { id: 'BA280', name: 'Accounting', sch: 3 },
      { id: 'BA300', name: 'Introduction to Selling', sch: 3 },
      { id: 'BA316', name: 'Cost Accounting', sch: 3 },
      { id: 'BA375', name: 'Ethical Decision Making', sch: 3 },
      { id: 'BA410', name: 'Intro to Management Information Systems', sch: 3 },
      { id: 'BA420', name: 'Business Law', sch: 3 },
      { id: 'BA425', name: 'Finance', sch: 3 },
      { id: 'BA436', name: 'International Business', sch: 3 },
      { id: 'BA445', name: 'Effective Leadership', sch: 3 },
      { id: 'BA448', name: 'Team Development & Motivation', sch: 3 },
      { id: 'BA456', name: 'Strategic Entrepreneurial Management', sch: 3 },
      { id: 'BA464', name: 'Marketing Strategy', sch: 3 },
      { id: 'BA486', name: 'Business Policy', sch: 3 },
      { id: 'BA490', name: 'Project Management', sch: 3 },
      { id: 'CM101', name: 'Principles of Communication', sch: 3 },
      { id: 'CM110', name: 'Developing Critical Thinking Skills', sch: 3 },
      { id: 'CM220', name: 'Presentation Skills', sch: 3 },
      { id: 'CM258', name: 'Conflict Management', sch: 3 },
      { id: 'CM285', name: 'Diversity and Inclusion', sch: 3 },
      { id: 'CS110', name: 'Introduction to Computers', sch: 3 },
      { id: 'EN111', name: 'Composition I', sch: 3 },
      { id: 'EN112', name: 'Composition II', sch: 3 },
      { id: 'EN221', name: 'American Literature I', sch: 3 },
      { id: 'GS150', name: 'General Biology', sch: 3 },
      { id: 'GS210', name: 'Earth Science', sch: 3 },
      { id: 'HI171', name: 'World Civilization I', sch: 3 },
      { id: 'HI172', name: 'World Civilization II', sch: 3 },
      { id: 'MA125', name: 'College Algebra', sch: 3 },
      { id: 'NS101', name: 'New Student Orientation', sch: 1 },
      { id: 'PF101', name: 'Academic Strategies', sch: 2 },
      { id: 'PF499', name: 'Career Strategies', sch: 3 },
      { id: 'PY141', name: 'General Psychology', sch: 3 },
      { id: 'SO241', name: 'General Sociology', sch: 3 },
    ],
  };

  /* ──────────────────────────────────────────────────────────────
     MATRIX_PROGS — programs included in the all-courses matrix.
     Masters/MBAs are excluded (no full course-level curriculum data).
     ────────────────────────────────────────────────────────────── */
  var MATRIX_PROGS = [
    { key: 'ascs',     label: 'A.S. CS',      full: 'A.S. Computer Science',       lvl: 'Associate',   field: 'sw'   },
    { key: 'bscs',     label: 'B.S. CS',      full: 'B.S. Computer Science',       lvl: 'Bachelor',    field: 'sw'   },
    { key: 'fsdc',     label: 'FSDC',         full: 'Full Stack Dev Certificate',  lvl: 'Certificate', field: 'sw'   },
    { key: 'asb',      label: 'A.S. Bus',     full: 'A.S. Business',               lvl: 'Associate',   field: 'biz'  },
    { key: 'bsbGen',   label: 'B.S. Bus Gen', full: 'B.S. Business – General',     lvl: 'Bachelor',    field: 'biz'  },
    { key: 'bsbMgmt',  label: 'B.S. Bus Mgmt',full: 'B.S. Business – Mgmt & Lead.',lvl: 'Bachelor',    field: 'biz'  },
    { key: 'bsbEntr',  label: 'B.S. Bus Ent', full: 'B.S. Business – Entrepren.',  lvl: 'Bachelor',    field: 'biz'  },
    { key: 'bsbSales', label: 'B.S. Bus Sale',full: 'B.S. Business – Sales',       lvl: 'Bachelor',    field: 'biz'  },
    { key: 'asc',      label: 'A.S. Comm',    full: 'A.S. Communication',          lvl: 'Associate',   field: 'comm' },
    { key: 'bac',      label: 'B.A. Comm',    full: 'B.A. Communication',          lvl: 'Bachelor',    field: 'comm' },
  ];

  // Keys used to classify a course into the A.S./Certificate group or the B.S.-only group
  var AS_KEYS = ['fsdc', 'ascs', 'asb', 'asc'];
  var BS_KEYS = ['bscs', 'bsbGen', 'bsbMgmt', 'bsbEntr', 'bsbSales', 'bac'];

  // GEN_ED — course IDs treated as general-education / liberal-arts foundation.
  // These are not major-specific (BA = business major, CS = CS major, advanced CM = comm major).
  var GEN_ED = {
    // English / writing / lit
    EN111: true, EN112: true, EN115: true, EN221: true, ENGL100: true,
    // Math
    MA125: true, MATH200: true,
    // Sciences
    GS150: true, GS210: true, ENVR200: true,
    // History
    HI171: true, HI172: true, HIST200: true,
    // Social sciences
    PY141: true, PSYC100: true, SO241: true, SO0241: true,
    // Communication foundations / public speaking
    CM110: true, CM220: true, CM285: true, SPCH100: true, SPH100: true,
    // Orientation / strategy / career
    NS101: true, PF101: true, PF499: true,
    // Basic computer literacy (not CS-major)
    CS110: true,
  };

  // ── CHRONOLOGICAL ORDER (manual) ──────────────────────────────
  // Course numbering alone doesn't fully reflect when a course is
  // taken in the curriculum (e.g., BA201 "Intro to Business" is a
  // 200-level code but is typically a first-year foundation course).
  // The list below is a best-effort manual ordering based on the
  // catalog course descriptions and prerequisite chains.
  // Lower index = earlier in the program.
  var CHRONO_ORDER = [
    // ── Term 1: Orientation + first foundational major course per field ──
    'NS101',                 // Orientation (everyone)
    'PF101',                 // Academic Strategies (everyone)
    'CS100',                 // Coding Foundations (CS major foundation)
    'BA201',                 // Intro to Business (Business major foundation)
    'BA205',                 // Principles of Management (immediate next biz step after BA201)
    'CM101',                 // Principles of Communication (Comm major foundation)
    'EN111',                 // Composition I (gen-ed)
    'MA125',                 // College Algebra (gen-ed)

    // ── Term 2: next foundational major + early gen-ed ──
    'CS110',                 // Intro to Computers
    'CS101',                 // SWE Principles (AAS AI SWE)
    'CM110',                 // Critical Thinking
    'CM220',                 // Presentation Skills
    'PY141',                 // General Psychology (gen-ed)
    'EN112',                 // Composition II (gen-ed)

    // ── Term 3: building out the major ──
    'CS103',                 // Object-Oriented Programming
    'CS277',                 // Intro to Programming in Python
    'CS301',                 // Front End – JavaScript
    'CS382',                 // Database Architecture
    'BE101',                 // Web Fundamentals
    'BE103',                 // SQL & NoSQL Basics
    'FE101',                 // Modern JS & TypeScript
    'BA210',                 // Organizational Behavior
    'BA220',                 // Principles of Marketing
    'BA271',                 // Macroeconomics
    'CM225',                 // Research Methods in Communication
    'CM241',                 // Public Relations
    'CM258',                 // Conflict Management
    'CM285',                 // Diversity and Inclusion
    'GS150',                 // General Biology (gen-ed)

    // ── Term 4: intermediate ──
    'CS102',                 // Data Structures & Algorithms
    'CS384',                 // Python Software Development
    'BE102',                 // RESTful API Development (Flask)
    'BE104',                 // Authentication, Authorization & Middleware
    'FE102',                 // Building Interactive UIs (React)
    'AI101',                 // Intro to AI & Math Foundations
    'AI102',                 // Fundamentals of ML
    'AI103',                 // Prompt Engineering & LLMs
    'BA272',                 // Microeconomics
    'BA280',                 // Accounting
    'BA235',                 // Business Statistics
    'BA252',                 // New Venture Creation
    'BA300',                 // Introduction to Selling
    'CM251',                 // Mass Communication
    'CM301',                 // Survey of Communication
    'CM310',                 // Communication Ethics
    'CM346',                 // Advertising and Promotion
    'GS210',                 // Earth Science (gen-ed)
    'HI171',                 // World Civilization I (gen-ed)
    'EN115',                 // Technical Writing for Business
    'EN221',                 // American Literature I (gen-ed)

    // ── Term 5: junior-level ──
    'BE105',                 // Advanced Backend / Microservices
    'BE106',                 // Backend Project
    'FE103',                 // Frontend Integration Project
    'CS300',                 // Network & Internet Security
    'CS497',                 // Advanced Web Development – React
    'BA316',                 // Cost Accounting
    'BA356',                 // Human Resource Management
    'BA358',                 // Production & Operations Management
    'BA375',                 // Ethical Decision Making
    'BA410',                 // Intro to MIS
    'BA420',                 // Business Law
    'BA425',                 // Finance
    'BA436',                 // International Business
    'BA445',                 // Effective Leadership
    'BA448',                 // Team Development & Motivation
    'BA456',                 // Strategic Entrepreneurial Management
    'BA464',                 // Marketing Strategy
    'BA471',                 // Money and Banking
    'CM425',                 // Intro to Media Writing
    'CM431',                 // Communication Theory
    'CM436',                 // Group Communication
    'CM437',                 // Nonverbal Communication
    'CM456',                 // Effective Communication Tools
    'CM457',                 // Intercultural Communication
    'HI172',                 // World Civilization II (gen-ed)
    'SO241',                 // General Sociology (gen-ed)

    // ── Term 6: senior / capstone / career ──
    'BA486',                 // Business Policy
    'BA490',                 // Project Management
    'AI104',                 // Applied AI Capstone
    'CS499',                 // FSD Capstone
    'CD101',                 // Professional Profiles
    'CD102',                 // AI Project Portfolio
    'CD103',                 // AI Career Strategy
    'CD104',                 // AI Career Launch Workshop
    'PF499',                 // Career Strategies

    // electives at the end (BSCS elective slots)
    'EL1', 'EL2', 'EL3', 'EL4', 'EL5',
  ];

  // ── PROGRAM_COURSE_ORDER (optional per-program overrides) ─────
  // When a program has an explicit course sequence specified here, that order
  // is used to assign terms (instead of the global CHRONO_ORDER fallback).
  // Use this to fine-tune the curriculum sequence within a single program
  // without affecting how other programs sort.
  // Pedagogical intent for A.S. Business: each term (after T1-T2) starts with
  // a foundational BA course; prereq chains respected (BA271→BA272, BA280→BA252).
  var PROGRAM_COURSE_ORDER = {
    // A.S. Computer Science (21 courses, 7 terms)
    // Each term leads with the CS-major course; gen-eds spread across all terms.
    // User-pinned terms: CS100→T1, EN111→T3, GS150→T4.
    ascs: [
      // T1 — orientation + Coding Foundations (CS major foundation, taken first)
      'NS101', 'PF101', 'CS100',
      // T2 — Intro to Business + Comm foundation + psychology gen-ed
      'BA201', 'CM101', 'PY141',
      // T3 — Python (needs CS100) + Composition I + Principles of Management (needs BA201)
      'CS277', 'EN111', 'BA205',
      // T4 — Front-End JS (needs CS100) + General Biology + Macroeconomics (needs BA201)
      'CS301', 'GS150', 'BA271',
      // T5 — Database Architecture (needs CS100) + College Algebra + Critical Thinking
      'CS382', 'MA125', 'CM110',
      // T6 — Python Software Dev (needs CS277) + Composition II (needs EN111) + Intro to Computers
      'CS384', 'EN112', 'CS110',
      // T7 — Advanced React (needs CS277) + Presentation Skills + Diversity & Inclusion
      'CS497', 'CM220', 'CM285',
    ],

    // B.S. Computer Science — 41 courses, 14 terms — prereqs respected
    bscs: [
      // T1 — orientation + foundations
      'NS101', 'PF101', 'BA201',
      // T2 — coding + communication + composition (prereqs for many)
      'CS100', 'CM101', 'EN111',
      // T3 — management (needs BA201) + computer literacy + math
      'BA205', 'CS110', 'MA125',
      // T4 — organizational behavior + critical thinking + python (needs CS100)
      'BA210', 'CM110', 'CS277',
      // T5 — macroeconomics + front-end JS + psychology
      'BA271', 'CS301', 'PY141',
      // T6 — accounting + database + composition II (needs EN111)
      'BA280', 'CS382', 'EN112',
      // T7 — microeconomics (needs BA271) + python dev (needs CS277) + biology
      'BA272', 'CS384', 'GS150',
      // T8 — ethics + react (needs CS277) + world civ I
      'BA375', 'CS497', 'HI171',
      // T9 — international business + presentation + world civ II (needs HI171)
      'BA436', 'CM220', 'HI172',
      // T10 — team dev (needs BA205) + conflict mgmt (needs CM101) + network security (needs CS110)
      'BA448', 'CM258', 'CS300',
      // T11 — diversity + group communication (needs CM101) + sociology
      'CM285', 'CM436', 'SO241',
      // T12 — project mgmt (needs BA448) + intercultural communication + first elective
      'BA490', 'CM457', 'EL1',
      // T13 — electives
      'EL2', 'EL3', 'EL4',
      // T14 — final elective + career capstone
      'EL5', 'PF499',
    ],

    // Full Stack Development Certificate — 6 courses, sequential per catalog (no concurrent enrollment)
    fsdc: [
      // T1 — Coding Foundations (foundational, must come first)
      'CS100',
      // T2 — Python (needs CS100)
      'CS277',
      // T3 — Front-End JavaScript (needs CS100)
      'CS301',
      // T4 — Database Architecture (needs CS100)
      'CS382',
      // T5 — Advanced React (needs CS277)
      'CS497',
      // T6 — FSD Capstone
      'CS499',
    ],

    asb: [
      // T1 — orientation + first business foundation
      'NS101', 'PF101', 'BA201',
      // T2 — management + computer literacy + ethics
      'BA205', 'CS110', 'BA375',
      // T3 — organizational behavior + communication principles + writing
      'BA210', 'CM101', 'EN111',
      // T4 — marketing + presentation + math
      'BA220', 'CM220', 'MA125',
      // T5 — critical thinking + macro + composition II
      'CM110', 'BA271', 'EN112',
      // T6 — accounting + conflict mgmt + science
      'BA280', 'CM258', 'GS150',
      // T7 — micro (builds on macro) + new venture (builds on accounting) + psychology
      'BA272', 'BA252', 'PY141',
    ],
  };

  // ── PROGRAM_TERMS ─────────────────────────────────────────────
  // Maps every course to a suggested term number WITHIN each program.
  // Algorithm:
  //   1. If PROGRAM_COURSE_ORDER has an explicit sequence, use that.
  //   2. Otherwise sort by CHRONO_ORDER (the curriculum-grounded sequence above).
  //   3. Chunk into terms of COURSES_PER_TERM (~3 courses per term).
  // A course can land in different terms in different programs depending on
  // what else is in that program's curriculum.
  // Pace assumption: undergrads take ~10 courses/year, ≈3 per term, 4 terms/year.
  // So an A.S. (~20 courses) → ~7 terms over 2 years; a B.S. (~40) → ~13 terms over 4 years.
  var COURSES_PER_TERM = 3;

  // Per-program overrides — for programs where the standard 3/term doesn't fit.
  // FSDC is strictly sequential per catalog (one course at a time), so 1/term.
  var COURSES_PER_TERM_OVERRIDES = {
    fsdc: 1,
  };

  var _CHRONO_INDEX = {};
  CHRONO_ORDER.forEach(function(id, i){ _CHRONO_INDEX[id] = i; });

  var PROGRAM_TERMS = {};      // { programKey: { courseId: termNumber } }
  var PROGRAM_ORDER = {};      // { programKey: { courseId: positionWithinProgram } }
  MATRIX_PROGS.forEach(function(prog){
    var courseList = COURSES[prog.key] || [];
    var orderedIds;
    if (PROGRAM_COURSE_ORDER[prog.key]) {
      // explicit override
      orderedIds = PROGRAM_COURSE_ORDER[prog.key].slice();
    } else {
      // fall back to global chrono order
      orderedIds = courseList.slice().sort(function(a, b){
        var ka = (a.id in _CHRONO_INDEX) ? _CHRONO_INDEX[a.id] : 100000;
        var kb = (b.id in _CHRONO_INDEX) ? _CHRONO_INDEX[b.id] : 100000;
        return ka - kb;
      }).map(function(c){ return c.id; });
    }
    var cpt = COURSES_PER_TERM_OVERRIDES[prog.key] || COURSES_PER_TERM;
    var termMap = {}, orderMap = {};
    orderedIds.forEach(function(id, i){
      termMap[id] = Math.floor(i / cpt) + 1;
      orderMap[id] = i;
    });
    PROGRAM_TERMS[prog.key] = termMap;
    PROGRAM_ORDER[prog.key] = orderMap;
  });

  return {
    PROGRAMS: PROGRAMS,
    COURSES: COURSES,
    MATRIX_PROGS: MATRIX_PROGS,
    AS_KEYS: AS_KEYS,
    BS_KEYS: BS_KEYS,
    GEN_ED: GEN_ED,
    CHRONO_ORDER: CHRONO_ORDER,
    PROGRAM_TERMS: PROGRAM_TERMS,
    PROGRAM_ORDER: PROGRAM_ORDER,
    COURSES_PER_TERM: COURSES_PER_TERM,
  };
})();
