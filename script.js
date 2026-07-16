const JOBS_BY_TRACK = {
  '국내 대기업': ['인사·경영지원', '마케팅', '브랜드 마케팅', '서비스기획', '국내영업', '해외영업', '재무·회계', '홍보·PR'],
  '해외 대기업': ['해외영업', '글로벌 마케팅', '사업개발', '영문 콘텐츠·PR', '구매·소싱', 'HR·피플팀', '글로벌 서비스기획'],
  '국내 은행권': ['기업금융', '리테일금융', 'WM·PB', '디지털금융', '리스크관리', '여신심사', '경영기획', '채용·인사'],
  '국내 공기업': ['사무행정', '경영기획', '인사·노무', '재무·회계', '홍보·대외협력', '사업관리', '고객지원', '지역·사회공헌'],
};

const CERTIFICATE_RECOMMENDATIONS = {
  '국내 대기업': [
    {
      rank: 1,
      name: 'OPIc AL',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '말하기 성적을 먼저 확보하면 지원 폭을 넓히기 좋아요.',
    },
    {
      rank: 2,
      name: '컴퓨터활용능력 1급',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '기본 사무 역량을 빠르게 증명할 수 있어요.',
    },
    {
      rank: 3,
      name: 'TOEIC 850+',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '영업·기획·해외 협업 직무에 두루 활용하기 좋아요.',
    },
  ],
  '해외 대기업': [
    {
      rank: 1,
      name: 'TOEIC Speaking',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '영문 커뮤니케이션의 기본 체력을 보여주기 좋아요.',
    },
    {
      rank: 2,
      name: 'TOEIC 900+',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '글로벌 지원에서 가장 즉시 읽히는 점수예요.',
    },
    {
      rank: 3,
      name: '국제무역사',
      prepWeeks: 6,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '사업개발·소싱·영업 직무에 힘을 실어줘요.',
    },
  ],
  '국내 은행권': [
    {
      rank: 1,
      name: '투자자산운용사',
      prepWeeks: 6,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '금융권 기본 자격으로 가장 먼저 손에 쥐기 좋아요.',
    },
    {
      rank: 2,
      name: 'AFPK',
      prepWeeks: 6,
      applicationWeeks: 1,
      examGapWeeks: 3,
      description: 'WM·PB와 자산관리 직무에 잘 맞아요.',
    },
    {
      rank: 3,
      name: '파생상품투자권유자문인력',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '리스크와 상품 이해도를 함께 보여주기 좋아요.',
    },
  ],
  '국내 공기업': [
    {
      rank: 1,
      name: '컴퓨터활용능력 1급',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '사무행정 기본기를 가장 빠르게 보여줄 수 있어요.',
    },
    {
      rank: 2,
      name: '한국사능력검정 1급',
      prepWeeks: 4,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '공기업 지원에서 여전히 강하게 쓰이는 자격이에요.',
    },
    {
      rank: 3,
      name: '사회조사분석사 2급',
      prepWeeks: 5,
      applicationWeeks: 1,
      examGapWeeks: 2,
      description: '사업관리·경영기획 계열에서 좋은 가점이 됩니다.',
    },
  ],
};

const CERTIFICATE_PRIORITY_COMPANIES = {
  'OPIc AL': ['삼성전자', '현대자동차', 'CJ제일제당'],
  '컴퓨터활용능력 1급': ['한국전력공사', '한국토지주택공사', '한국수자원공사'],
  'TOEIC 850+': ['SK하이닉스', 'LG전자', '삼성전자'],
  'TOEIC Speaking': ['Amazon', 'Microsoft', 'Apple'],
  'TOEIC 900+': ['Google', 'Meta', 'Amazon'],
  '국제무역사': ['CJ제일제당', '현대자동차', 'LG전자'],
  '투자자산운용사': ['신한은행', 'KB국민은행', '하나은행'],
  'AFPK': ['KB국민은행', '하나은행', 'NH농협은행'],
  '파생상품투자권유자문인력': ['우리은행', '신한은행', 'NH농협은행'],
  '한국사능력검정 1급': ['한국철도공사', '인천국제공항공사', '한국전력공사'],
  '사회조사분석사 2급': ['한국수자원공사', '한국토지주택공사', '한국철도공사'],
};

const COMPANY_RECOMMENDATIONS = {
  '국내 대기업': [
    { name: '삼성전자', style: 'brand', jobs: ['서비스기획', '마케팅', '인사·경영지원'] },
    { name: '현대자동차', style: 'brand', jobs: ['국내영업', '서비스기획', '브랜드 마케팅'] },
    { name: 'LG전자', style: 'brand', jobs: ['마케팅', '브랜드 마케팅', '해외영업'] },
    { name: 'CJ제일제당', style: 'brand', jobs: ['국내영업', '해외영업', '마케팅'] },
    { name: 'SK하이닉스', style: 'brand', jobs: ['재무·회계', '인사·경영지원', '해외영업'] },
  ],
  '해외 대기업': [
    { name: 'Amazon', style: 'global', jobs: ['해외영업', '사업개발', '구매·소싱'] },
    { name: 'Google', style: 'global', jobs: ['글로벌 마케팅', '영문 콘텐츠·PR', '글로벌 서비스기획'] },
    { name: 'Microsoft', style: 'global', jobs: ['HR·피플팀', '글로벌 서비스기획', '사업개발'] },
    { name: 'Apple', style: 'global', jobs: ['영문 콘텐츠·PR', '글로벌 마케팅', '해외영업'] },
    { name: 'Meta', style: 'global', jobs: ['글로벌 마케팅', '글로벌 서비스기획', '사업개발'] },
  ],
  '국내 은행권': [
    { name: 'KB국민은행', style: 'finance', jobs: ['WM·PB', '리테일금융', '경영기획'] },
    { name: '신한은행', style: 'finance', jobs: ['디지털금융', '리테일금융', '리스크관리'] },
    { name: '하나은행', style: 'finance', jobs: ['기업금융', '여신심사', '경영기획'] },
    { name: '우리은행', style: 'finance', jobs: ['리테일금융', '채용·인사', '경영기획'] },
    { name: 'NH농협은행', style: 'finance', jobs: ['WM·PB', '기업금융', '디지털금융'] },
  ],
  '국내 공기업': [
    { name: '한국전력공사', style: 'public', jobs: ['사업관리', '경영기획', '재무·회계'] },
    { name: '한국토지주택공사', style: 'public', jobs: ['사업관리', '고객지원', '사무행정'] },
    { name: '인천국제공항공사', style: 'public', jobs: ['홍보·대외협력', '사업관리', '고객지원'] },
    { name: '한국수자원공사', style: 'public', jobs: ['사업관리', '경영기획', '인사·노무'] },
    { name: '한국철도공사', style: 'public', jobs: ['사무행정', '고객지원', '사업관리'] },
  ],
};

const JOB_COMPANY_PRIORITY = {
  '서비스기획': ['삼성전자', '현대자동차', 'LG전자', 'Google', 'Microsoft'],
  '마케팅': ['LG전자', 'CJ제일제당', 'Google', 'Meta', 'Amazon'],
  '브랜드 마케팅': ['현대자동차', 'LG전자', 'CJ제일제당', 'Apple'],
  '국내영업': ['현대자동차', 'CJ제일제당', '하나은행'],
  '해외영업': ['Amazon', 'Apple', 'LG전자', 'CJ제일제당'],
  '재무·회계': ['SK하이닉스', '한국전력공사', 'KB국민은행'],
  '홍보·PR': ['LG전자', 'Google', '인천국제공항공사'],
  '글로벌 마케팅': ['Google', 'Meta', 'Apple', 'Amazon'],
  '사업개발': ['Amazon', 'Meta', 'Microsoft', '한국전력공사'],
  '영문 콘텐츠·PR': ['Google', 'Apple', 'Meta'],
  '구매·소싱': ['Amazon', 'CJ제일제당', '하나은행'],
  'HR·피플팀': ['Microsoft', 'SK하이닉스', '우리은행'],
  '글로벌 서비스기획': ['Google', 'Microsoft', 'Meta'],
  '기업금융': ['하나은행', 'NH농협은행', 'KB국민은행'],
  '리테일금융': ['KB국민은행', '신한은행', '우리은행'],
  'WM·PB': ['KB국민은행', 'NH농협은행', '신한은행'],
  '디지털금융': ['신한은행', 'NH농협은행', '우리은행'],
  '리스크관리': ['신한은행', '우리은행', '한국수자원공사'],
  '여신심사': ['하나은행', 'KB국민은행'],
  '경영기획': ['한국전력공사', 'KB국민은행', 'SK하이닉스'],
  '채용·인사': ['우리은행', 'Microsoft', 'SK하이닉스'],
  '사무행정': ['한국철도공사', '한국토지주택공사', 'SK하이닉스'],
  '인사·노무': ['한국수자원공사', 'SK하이닉스', 'Microsoft'],
  '홍보·대외협력': ['인천국제공항공사', '한국토지주택공사', 'LG전자'],
  '사업관리': ['한국전력공사', '한국토지주택공사', '한국수자원공사'],
  '고객지원': ['한국철도공사', '한국토지주택공사', '인천국제공항공사'],
  '지역·사회공헌': ['한국전력공사', '한국수자원공사'],
};

const DAILY_QUOTES = [
  '완벽한 계획보다 오늘의 한 칸이 더 멀리 갑니다.',
  '공고는 기다려주지 않지만 준비는 쌓입니다.',
  '서류는 빠를수록 편하고, 연습은 많을수록 정확해요.',
  '하루를 가볍게 시작하면 취준도 덜 무겁습니다.',
  '지금 적는 일정 하나가 나중의 불안을 줄여줘요.',
  '오늘의 작은 정리는 내일의 지원 속도를 바꿉니다.',
];

const LAYER_META = {
  recruitment: { label: '서류 지원 마감', quickAddLabel: '서류 지원 마감', color: 'recruitment', group: '공채 준비' },
  resume: { label: '서류 준비', quickAddLabel: '서류 준비', color: 'resume', group: '공채 준비' },
  aptitude: { label: '인적성 준비', quickAddLabel: '인적성 준비', color: 'aptitude', group: '공채 준비' },
  certificatePrep: { label: '시험 준비', quickAddLabel: '자격증 시험 준비', color: 'certificate', group: '자격증 준비' },
  certificateApply: { label: '접수 마감', quickAddLabel: '자격증 접수 마감', color: 'certificate', group: '자격증 준비' },
  certificateExam: { label: '시험', quickAddLabel: '자격증 시험', color: 'certificate', group: '자격증 준비' },
  certificateResult: { label: '결과 발표', quickAddLabel: '자격증 결과 발표', color: 'certificate', group: '자격증 준비' },
  personal: { label: '개인 일정', quickAddLabel: '개인 일정', color: 'personal', group: '개인 일정' },
};

const app = document.querySelector('#app');
const today = new Date();
const state = {
  track: '',
  job: '',
  season: '',
};
const layerState = {
  recruitment: false,
  resume: false,
  aptitude: false,
  certificatePrep: false,
  certificateApply: false,
  certificateExam: false,
  certificateResult: false,
  personal: false,
};
const customEvents = [];
const customCompanyEvents = [];
const selectedCompanies = [];
const selectedCertificates = [];
const certificateTargetWeeks = {};
const certificateVisibility = {};
let calendarViewIndex = 0;
let calendarTransition = '';
let activeMoreEventsDate = '';
let activeCertificatePicker = null;
let activeCertificateLibraryName = null;
let toastTimer = null;
let toastMessage = '';
let activeCertificateGoalEditor = null;
let companyManualFormOpen = false;
let sidebarSectionsOpen = {
  dday: true,
  layers: false,
  company: false,
  certificate: false,
  quickAdd: false,
};
let sidebarWidth = 300;

function getSessionId() {
  let id = sessionStorage.getItem('chwippo-session-id');
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : `s-${Date.now()}`;
    sessionStorage.setItem('chwippo-session-id', id);
  }
  return id;
}

function trackEvent(eventName, params = {}) {
  const detail = { session_id: getSessionId(), timestamp: Date.now(), ...params };
  if (typeof window.gtag === 'function') window.gtag('event', eventName, detail);
  console.info('[analytics]', eventName, detail);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[char]);
}

function showToast(message) {
  toastMessage = message;
  renderCalendar();
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastMessage = '';
    renderCalendar();
  }, 2400);
}

function hashCode(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function parseSeason(season) {
  if (!season) return null;
  const [yearText, half] = season.split(' ');
  if (!yearText || !half) return null;
  return {
    year: Number(yearText),
    half,
  };
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date, amount) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function sameDay(left, right) {
  return left.getFullYear() === right.getFullYear()
    && left.getMonth() === right.getMonth()
    && left.getDate() === right.getDate();
}

function sameMonth(left, right) {
  return left.getFullYear() === right.getFullYear()
    && left.getMonth() === right.getMonth();
}

function formatKoreanDate(date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function formatMonthLabel(date) {
  return `${date.getMonth() + 1}월`;
}

function formatRange(start, end) {
  if (sameDay(start, end)) return formatKoreanDate(start);
  if (sameMonth(start, end)) return `${formatKoreanDate(start)} ~ ${end.getDate()}일`;
  return `${formatKoreanDate(start)} ~ ${formatKoreanDate(end)}`;
}

function targetSeasonDate() {
  const parsed = parseSeason(state.season);
  if (!parsed) return addMonths(startOfMonth(today), 2);

  // 실제 공채 서류 마감 기준: 하반기는 9월 중순. 아래에서 -21일로 역산해 마감일을 구하므로
  // 마감일보다 21일 뒤 날짜를 반환한다.
  const target = parsed.half === '하반기'
    ? addDays(new Date(parsed.year, 8, 15), 21)
    : new Date(parsed.year, 5 + 1, 0);

  if (target < startOfMonth(today)) return addMonths(startOfMonth(today), 2);
  return target;
}

function monthRange(start, end) {
  const months = [];
  let cursor = startOfMonth(start);
  const finalMonth = startOfMonth(end);
  if (finalMonth < cursor) return [new Date(cursor)];
  while (cursor <= finalMonth) {
    months.push(new Date(cursor));
    cursor = addMonths(cursor, 1);
  }
  return months;
}

function clampCalendarViewIndex(monthCount) {
  return Math.max(0, Math.min(calendarViewIndex, Math.max(0, monthCount - 1)));
}

function getDailyQuote() {
  const index = (today.getMonth() * 31 + today.getDate()) % DAILY_QUOTES.length;
  return DAILY_QUOTES[index];
}

function getCompanyDdayList() {
  const events = getCompanyEvents();
  return selectedCompanies.map(company => {
    const deadlineEvent = events.find(event => event.companyName === company && event.layer === 'recruitment');
    const deadline = deadlineEvent ? deadlineEvent.start : addDays(targetSeasonDate(), -21);
    return {
      company,
      days: Math.max(0, Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))),
    };
  }).sort((left, right) => left.days - right.days);
}

function getAllCertificateRecommendations() {
  return Object.values(CERTIFICATE_RECOMMENDATIONS).flat();
}

function getUniqueCertificateList() {
  const seen = new Set();
  return getAllCertificateRecommendations().filter(cert => {
    if (seen.has(cert.name)) return false;
    seen.add(cert.name);
    return true;
  });
}

function getCertificateTargetPrepWeeks(cert) {
  const value = certificateTargetWeeks[cert.name];
  return Number.isFinite(Number(value)) && Number(value) > 0 ? Number(value) : cert.prepWeeks;
}

function setCertificateTargetPrepWeeks(certName, weeks) {
  const nextWeeks = Math.max(1, Number(weeks) || 1);
  certificateTargetWeeks[certName] = nextWeeks;
}

function getSelectedCertificateList() {
  return selectedCertificates
    .map(name => {
      const cert = getAllCertificateRecommendations().find(item => item.name === name);
      if (!cert) return null;
      const rounds = getCertificateRoundOptions(cert);
      const chosenRound = rounds[0];
      const targetWeeks = getCertificateTargetPrepWeeks(cert);
      return {
        cert,
        targetWeeks,
        round: chosenRound.round,
        examDate: chosenRound.examDate,
        days: Math.max(0, Math.ceil((chosenRound.examDate - today) / (1000 * 60 * 60 * 24))),
      };
    })
    .filter(Boolean)
    .sort((left, right) => left.days - right.days);
}

function getCertificatePriorityCompanies(certName) {
  return CERTIFICATE_PRIORITY_COMPANIES[certName] || [];
}

function getCertificateRecommendations() {
  const recommendations = CERTIFICATE_RECOMMENDATIONS[state.track] || CERTIFICATE_RECOMMENDATIONS['국내 대기업'];
  const startAnchor = addDays(today, 3);

  return recommendations.map((plan, index) => {
    const targetWeeks = getCertificateTargetPrepWeeks(plan);
    const prepStart = addDays(startAnchor, index * 7);
    const prepEnd = addDays(prepStart, targetWeeks * 7 - 1);
    const applicationStart = addDays(prepEnd, 1);
    const applicationEnd = addDays(applicationStart, plan.applicationWeeks * 7 - 1);
    const examDate = addDays(applicationEnd, plan.examGapWeeks * 7);
    return {
      ...plan,
      targetWeeks,
      prepStart,
      prepEnd,
      applicationStart,
      applicationEnd,
      examDate,
      detail: plan.description,
      seriesClass: `cert-${plan.rank}`,
    };
  });
}

function getCertificateRoundOptions(cert) {
  const roundOffsets = [
    { round: 1, label: '1회차', monthOffset: 1 },
    { round: 2, label: '2회차', monthOffset: 4 },
    { round: 3, label: '3회차', monthOffset: 7 },
  ];

  return roundOffsets.map(option => {
    const anchor = addMonths(startOfMonth(today), option.monthOffset + (cert.rank - 1));
    const prepStart = addDays(anchor, -21);
    const prepEnd = addDays(anchor, -1);
    const applicationStart = addDays(anchor, 7);
    const applicationEnd = addDays(anchor, 13);
    const examDate = addDays(anchor, 21);
    const resultDate = addDays(examDate, 14);

    return {
      ...option,
      cert,
      prepStart,
      prepEnd,
      applicationStart,
      applicationEnd,
      examDate,
      resultDate,
      summary: `${formatMonthLabel(examDate)} ${option.label}`,
    };
  });
}

function addCertificateSchedule(certName, round = 1) {
  const cert = findCertificateByName(certName);
  if (!cert) return;
  const selectedRound = getCertificateRoundOptions(cert).find(item => item.round === Number(round)) || getCertificateRoundOptions(cert)[0];
  const certEvents = [
    {
      id: `cert-${Date.now()}-${cert.rank}-${selectedRound.round}-prep`,
      title: `${cert.name} ${selectedRound.round}회차 시험 준비`,
      start: selectedRound.prepStart,
      end: selectedRound.prepEnd,
      layer: 'certificatePrep',
      kind: '자격증',
      detail: `${cert.description} 준비 ${formatRange(selectedRound.prepStart, selectedRound.prepEnd)}`,
      markerLabel: '준비',
      eventLabel: cert.name,
      certName: cert.name,
      certRound: selectedRound.round,
    },
    {
      id: `cert-${Date.now()}-${cert.rank}-${selectedRound.round}-apply`,
      title: `${cert.name} ${selectedRound.round}회차 접수 마감`,
      start: selectedRound.applicationStart,
      end: selectedRound.applicationStart,
      layer: 'certificateApply',
      kind: '자격증',
      detail: `접수 마감 ${formatRange(selectedRound.applicationStart, selectedRound.applicationEnd)}`,
      markerLabel: '접수',
      eventLabel: cert.name,
      certName: cert.name,
      certRound: selectedRound.round,
    },
    {
      id: `cert-${Date.now()}-${cert.rank}-${selectedRound.round}-exam`,
      title: `${cert.name} ${selectedRound.round}회차 시험`,
      start: selectedRound.examDate,
      end: selectedRound.examDate,
      layer: 'certificateExam',
      kind: '자격증',
      detail: `시험 ${formatRange(selectedRound.examDate, selectedRound.examDate)}`,
      markerLabel: '시험',
      eventLabel: cert.name,
      certName: cert.name,
      certRound: selectedRound.round,
    },
    {
      id: `cert-${Date.now()}-${cert.rank}-${selectedRound.round}-result`,
      title: `${cert.name} ${selectedRound.round}회차 결과 발표`,
      start: selectedRound.resultDate,
      end: selectedRound.resultDate,
      layer: 'certificateResult',
      kind: '자격증',
      detail: `결과 발표(예상) ${formatRange(selectedRound.resultDate, selectedRound.resultDate)} · 시험일로부터 2주 후로 예상한 날짜예요.`,
      markerLabel: '발표',
      eventLabel: cert.name,
      certName: cert.name,
      certRound: selectedRound.round,
    },
  ];

  customEvents.unshift(...certEvents);
  if (!selectedCertificates.includes(cert.name)) {
    selectedCertificates.unshift(cert.name);
  }
  layerState.certificatePrep = true;
  layerState.certificateApply = true;
  layerState.certificateExam = true;
  layerState.certificateResult = true;
  trackEvent('certificate_schedule_added', { rank: cert.rank, name: cert.name, round: selectedRound.round });
  activeCertificatePicker = null;
  showToast(`${formatMonthLabel(selectedRound.examDate)} ${selectedRound.examDate.getDate()}일 ${selectedRound.round}회차 ${cert.name} 자격증 일정이 캘린더에 추가되었어요.`);
  renderCalendar();
}

function removeCertificateSchedule(certName) {
  const index = selectedCertificates.indexOf(certName);
  if (index >= 0) selectedCertificates.splice(index, 1);
  for (let i = customEvents.length - 1; i >= 0; i -= 1) {
    if (customEvents[i].certName === certName) customEvents.splice(i, 1);
  }
  delete certificateVisibility[certName];
  delete certificateTargetWeeks[certName];
  trackEvent('certificate_schedule_removed', { name: certName });
  showToast(`${certName} 자격증 일정을 삭제했어요.`);
  renderCalendar();
}

function getUniqueCompanyList() {
  return Object.values(COMPANY_RECOMMENDATIONS).flat();
}

function getCompanyRecommendations() {
  const companies = COMPANY_RECOMMENDATIONS[state.track] || COMPANY_RECOMMENDATIONS['국내 대기업'];
  if (!state.job) return companies;
  return [...companies].sort((left, right) => {
    const priority = JOB_COMPANY_PRIORITY[state.job] || [];
    const leftScore = priority.includes(left.name) ? 2 : (left.jobs?.includes(state.job) ? 1 : 0);
    const rightScore = priority.includes(right.name) ? 2 : (right.jobs?.includes(state.job) ? 1 : 0);
    return rightScore - leftScore;
  });
}

function buildCompanyEvent(companyName, index, source = 'recommendation', manualDates = null) {
  const order = index + 1;
  let applicationStart;
  let applicationEnd;
  let resumeStart;
  let resumeEnd;
  let aptitudeStart;
  let aptitudeEnd;

  if (manualDates) {
    applicationStart = manualDates.deadline;
    applicationEnd = manualDates.deadline;
    resumeStart = manualDates.resumeStart;
    resumeEnd = manualDates.resumeEnd;
    aptitudeStart = manualDates.aptitudeStart;
    aptitudeEnd = manualDates.aptitudeEnd;
  } else {
    const deadline = addDays(targetSeasonDate(), -21);
    const offset = hashCode(companyName) % 16;
    applicationStart = deadline;
    applicationEnd = deadline;
    resumeEnd = addDays(applicationStart, -1);
    resumeStart = addDays(resumeEnd, -18 - (offset % 4));
    aptitudeStart = addDays(applicationStart, -2 - (offset % 3));
    aptitudeEnd = addDays(aptitudeStart, 9 + (order % 3));
  }

  return {
    id: `company-${source}-${companyName}-${order}`.replace(/\s+/g, '-'),
    title: `${companyName} 공채 서류 마감`,
    start: applicationStart,
    end: applicationEnd,
    layer: 'recruitment',
    kind: '서류 마감',
    detail: manualDates
      ? `${companyName} 서류 마감일과 준비 일정을 직접 입력했어요.`
      : `${companyName} 서류 마감일을 기준으로 자소서 마일스톤과 인적성 준비 구간을 역산했어요.`,
    companyName,
    companySource: source,
    companySchedule: {
      applicationStart,
      applicationEnd,
      aptitudeStart,
      aptitudeEnd,
      resumeStart,
      resumeEnd,
    },
  };
}

function getCompanyEvents() {
  const searchEvents = customCompanyEvents.map(item => buildCompanyEvent(item.name, item.order || 0, item.manualDates ? 'manual' : 'search', item.manualDates || null));
  const unique = new Map();

  searchEvents.forEach(event => {
    const key = `${event.companySource}:${event.companyName}`;
    if (unique.has(key)) return;
    unique.set(key, event);
  });

  return [...unique.values()].flatMap(event => ([
    {
      id: `${event.id}-resume`,
      title: `${event.companyName} 자소서 마일스톤`,
      start: event.companySchedule.resumeStart,
      end: event.companySchedule.resumeEnd,
      layer: 'resume',
      kind: '자소서 마일스톤',
      detail: event.companySource === 'manual'
        ? `${event.companyName} 직접 입력한 서류 준비 기간입니다.`
        : `${event.companyName} 서류 마감일을 기준으로 역산한 자소서 마일스톤입니다.`,
      eventLabel: `${event.companyName} 자소서 마일스톤`,
      companyName: event.companyName,
      companySource: event.companySource,
    },
    {
      id: `${event.id}-aptitude`,
      title: `${event.companyName} 인적성 준비`,
      start: event.companySchedule.aptitudeStart,
      end: event.companySchedule.aptitudeEnd,
      layer: 'aptitude',
      kind: '인적성 준비',
      detail: event.companySource === 'manual'
        ? `${event.companyName} 직접 입력한 인적성 준비 구간입니다.`
        : `${event.companyName} 서류 마감일을 기준으로 역산한 인적성 준비 구간입니다.`,
      eventLabel: `${event.companyName} 인적성 준비 기간`,
      companyName: event.companyName,
      companySource: event.companySource,
    },
    {
      id: event.id,
      title: `${event.companyName} 공채 서류 마감`,
      start: event.companySchedule.applicationStart,
      end: event.companySchedule.applicationEnd,
      layer: 'recruitment',
      kind: '서류 마감',
      detail: event.detail,
      eventLabel: `${event.companyName} 서류 마감`,
      companyName: event.companyName,
      companySource: event.companySource,
    },
  ]));
}

function getPinnedEvents(events, day) {
  const priority = {
    recruitment: 0,
    aptitude: 1,
    resume: 2,
    certificatePrep: 3,
    certificateApply: 4,
    certificateExam: 5,
    certificateResult: 6,
    personal: 7,
  };

  return [...events]
    .sort((left, right) => (priority[left.layer] ?? 9) - (priority[right.layer] ?? 9) || left.title.localeCompare(right.title, 'ko'))
    .slice(0, 3);
}

function getCertificateDayItems() {
  return selectedCertificates.map(name => {
    const cert = Object.values(CERTIFICATE_RECOMMENDATIONS).flat().find(item => item.name === name);
    if (!cert) return null;
    const rounds = getCertificateRoundOptions(cert);
    const targetWeeks = getCertificateTargetPrepWeeks(cert);
    const selectedRound = rounds[0];
    return {
      name,
      cert,
      targetWeeks,
      days: Math.max(0, Math.ceil((selectedRound.examDate - today) / (1000 * 60 * 60 * 24))),
      round: selectedRound.round,
      examDate: selectedRound.examDate,
    };
  }).filter(Boolean).sort((a, b) => a.days - b.days);
}

function getCustomEvents() {
  return customEvents.map(event => ({
    ...event,
    custom: true,
    start: event.start instanceof Date ? event.start : new Date(`${event.start}T12:00:00`),
    end: event.end instanceof Date ? event.end : new Date(`${event.end || event.start}T12:00:00`),
  }));
}

const CERTIFICATE_LAYERS = new Set(['certificatePrep', 'certificateApply', 'certificateExam', 'certificateResult']);

function isCertificateVisible(event) {
  if (!CERTIFICATE_LAYERS.has(event.layer)) return true;
  if (!event.certName) return true;
  if (certificateVisibility[event.certName] === false) return false;
  return true;
}

function getAllEvents() {
  return [...getCompanyEvents(), ...getCustomEvents()];
}

function eventIntersectsMonth(event, monthDate) {
  return event.end >= startOfMonth(monthDate) && event.start <= endOfMonth(monthDate);
}

function monthEventsForSummary(events, monthDate) {
  return events.filter(event => layerState[event.layer] && isCertificateVisible(event) && eventIntersectsMonth(event, monthDate));
}

function sortDayEvents(events) {
  const layerPriority = {
    certificatePrep: 0,
    certificateApply: 1,
    certificateExam: 2,
    certificateResult: 3,
    recruitment: 4,
    aptitude: 5,
    resume: 6,
    personal: 7,
  };

  return [...events].sort((left, right) => {
    const leftPriority = layerPriority[left.layer] ?? 99;
    const rightPriority = layerPriority[right.layer] ?? 99;
    if (leftPriority !== rightPriority) return leftPriority - rightPriority;
    if (Boolean(left.markerLabel) !== Boolean(right.markerLabel)) return left.markerLabel ? -1 : 1;
    return left.title.localeCompare(right.title, 'ko');
  });
}

function quoteCardMarkup() {
  return `
    <div class="quote-card">
      <p class="panel-sublabel">오늘의 명언</p>
      <strong>“${escapeHtml(getDailyQuote())}”</strong>
    </div>
  `;
}

function renderAccordionSection(key, label, bodyHtml) {
  const isOpen = sidebarSectionsOpen[key];
  return `
    <button class="section-toggle" type="button" data-section-toggle="${key}" aria-expanded="${isOpen ? 'true' : 'false'}">
      <span class="panel-label">${escapeHtml(label)}</span>
      <span class="toggle-icon">${isOpen ? '−' : '+'}</span>
    </button>
    ${isOpen ? `<div class="section-body">${bodyHtml}</div>` : ''}
  `;
}

function buildMonthWeeks(monthDate) {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  const offset = monthStart.getDay();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const dayNumber = index - offset + 1;
    if (index < offset || dayNumber > monthEnd.getDate()) return null;
    return new Date(monthDate.getFullYear(), monthDate.getMonth(), dayNumber);
  });

  return Array.from({ length: 6 }, (_, weekIndex) => cells.slice(weekIndex * 7, weekIndex * 7 + 7));
}

function getVisibleMultiDayEvents(events, monthDate) {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  return events
    .filter(event => layerState[event.layer] && isCertificateVisible(event) && event.end >= monthStart && event.start <= monthEnd && !sameDay(event.start, event.end))
    .map(event => ({
      ...event,
      visibleStart: event.start < monthStart ? monthStart : event.start,
      visibleEnd: event.end > monthEnd ? monthEnd : event.end,
    }));
}

function layoutWeekSegments(events, week) {
  const visibleDays = week.filter(Boolean);
  if (!visibleDays.length) return [];
  const weekStart = visibleDays[0];
  const weekEnd = visibleDays[visibleDays.length - 1];
  const segments = events
    .filter(event => event.visibleEnd >= weekStart && event.visibleStart <= weekEnd)
    .map(event => ({
      ...event,
      startCol: Math.max(0, (event.visibleStart < weekStart ? weekStart : event.visibleStart).getDay()),
      endCol: Math.min(6, (event.visibleEnd > weekEnd ? weekEnd : event.visibleEnd).getDay()),
    }))
    .sort((left, right) => left.startCol - right.startCol || right.endCol - left.endCol);

  const laneEnds = [];
  return segments.map(segment => {
    let lane = laneEnds.findIndex(lastEnd => lastEnd < segment.startCol);
    if (lane === -1) {
      lane = laneEnds.length;
      laneEnds.push(segment.endCol);
    } else {
      laneEnds[lane] = segment.endCol;
    }
    return { ...segment, lane };
  });
}

const WEEK_BAR_TOP_OFFSET = 32;
const WEEK_BAR_LANE_HEIGHT = 22;

function renderWeekBlock(week, events, multiDayEvents) {
  const segments = layoutWeekSegments(multiDayEvents, week);
  const laneCount = segments.length ? Math.max(...segments.map(segment => segment.lane + 1)) : 0;
  const dayEventsStyle = laneCount ? ` style="padding-top:${laneCount * WEEK_BAR_LANE_HEIGHT + 6}px"` : '';

  const dayCells = week.map(day => {
    if (!day) return '<div class="day empty"></div>';
    const dayEvents = sortDayEvents(events.filter(event => layerState[event.layer] && isCertificateVisible(event) && sameDay(event.start, event.end) && event.start <= day && event.end >= day));
    const isToday = sameDay(day, today);
    const visibleEvents = getPinnedEvents(dayEvents, day);
    const hiddenCount = Math.max(0, dayEvents.length - visibleEvents.length);
    const dateKey = toDateInputValue(day);
    const hiddenEvents = dayEvents.slice(visibleEvents.length);
    return `
      <div class="day ${isToday ? 'today' : ''}">
        <time>${day.getDate()}</time>
        <div class="day-events"${dayEventsStyle}>
          ${visibleEvents.map(event => `
            <button class="event event-chip ${event.layer} ${event.seriesClass || ''} ${event.markerLabel ? 'marker-only' : ''}" data-event="${event.id}" type="button" title="${escapeHtml(event.title)}">
              <span class="event-company-label">${escapeHtml(event.eventLabel || event.companyName || event.title)}</span>
              ${event.markerLabel ? `<span class="event-marker-label">${escapeHtml(event.markerLabel)}</span>` : ''}
            </button>
          `).join('')}
          ${hiddenCount > 0 ? `
            <button class="event more-events" type="button" data-more-events="${dateKey}" aria-expanded="${activeMoreEventsDate === dateKey ? 'true' : 'false'}">+${hiddenCount}</button>
            ${activeMoreEventsDate === dateKey ? `
              <div class="more-popover" role="dialog">
                ${hiddenEvents.map(event => `
                  <button class="popover-item" type="button" data-event="${event.id}">
                    <span class="popover-dot ${event.layer}"></span>
                    <span>${escapeHtml(event.title)}</span>
                  </button>
                `).join('')}
              </div>
            ` : ''}
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  const barCells = segments.map(segment => `
    <button
      class="event-range ${segment.layer} ${segment.seriesClass || ''}"
      style="top:${WEEK_BAR_TOP_OFFSET + segment.lane * WEEK_BAR_LANE_HEIGHT}px; left:calc(${segment.startCol} * 100% / 7 + 2px); width:calc(${segment.endCol - segment.startCol + 1} * 100% / 7 - 4px);"
      data-event="${segment.id}"
      type="button"
      title="${escapeHtml(segment.title)}"
    >
      <span class="event-range-label">${escapeHtml(segment.eventLabel || segment.companyName || segment.title)}</span>
      ${segment.markerLabel ? `<span class="event-range-marker">${escapeHtml(segment.markerLabel)}</span>` : ''}
    </button>
  `).join('');

  return `
    <div class="week-block">
      <div class="weekdays week-grid-head">
        ${['일', '월', '화', '수', '목', '금', '토'].map(day => `<span>${day}</span>`).join('')}
      </div>
      <div class="grid">${dayCells}${barCells}</div>
    </div>
  `;
}

function renderLanding() {
  const jobOptions = state.track ? JOBS_BY_TRACK[state.track] : [];
  app.innerHTML = `
    <div class="landing">
      <header class="landing-header">
        <a class="logo" href="#/">취뽀<span>달력</span></a>
        <span class="header-note">취준의 오늘을 정리하다</span>
      </header>
      <section class="hero" aria-labelledby="hero-title">
        <p class="eyebrow"><i></i> CAREER PLANNING, MADE CLEAR</p>
        <h1 id="hero-title">당신이 꿈꾸는 직무를<br /><em>선택하세요.</em></h1>
        <p class="hero-copy">한 방에 끝내는 취준 숏컷 캘린더</p>
        <div class="selector-card">
          <div class="card-label">나의 취업 목표</div>
          <label class="sentence">
            저는
            <select id="track" aria-label="기업 대분류">
              <option value="">대분류를 선택하세요</option>
              ${Object.keys(JOBS_BY_TRACK).map(track => `<option value="${track}" ${track === state.track ? 'selected' : ''}>${track}</option>`).join('')}
            </select>
            의
            <select id="job" aria-label="직무" ${state.track ? '' : 'disabled'}>
              <option value="">직무를 선택하세요</option>
              ${jobOptions.map(job => `<option value="${job}" ${job === state.job ? 'selected' : ''}>${job}</option>`).join('')}
            </select>
            직무에 취업하고 싶어요.
          </label>
          <div class="season-field">
            <span>목표 시즌</span>
            <div class="season-options">
              ${getSeasonOptions().map(season => `<button class="season ${season === state.season ? 'selected' : ''}" data-season="${season}" type="button">${season}</button>`).join('')}
            </div>
          </div>
          <button id="create-calendar" class="primary-button" ${state.track && state.job && state.season ? '' : 'disabled'}>
            취뽀 캘린더 만들기 <span>→</span>
          </button>
        </div>
        <p class="form-hint">문과 계열 직무를 중심으로 구성했어요. 선택 후 언제든 바꿀 수 있습니다.</p>
      </section>
      <section class="benefits">
        <div><b>01</b><strong>공채 마감일</strong><p>목표 시즌에 맞춘 지원 일정을 정리해요.</p></div>
        <div><b>02</b><strong>준비 역산</strong><p>마감일 기준으로 필요한 시작일을 계산해요.</p></div>
        <div><b>03</b><strong>자격증 로드맵</strong><p>직무에 맞는 다음 한 걸음을 보여드려요.</p></div>
      </section>
    </div>
  `;

  document.querySelector('#track').addEventListener('change', event => {
    state.track = event.target.value;
    state.job = '';
    selectedCompanies.length = 0;
    customCompanyEvents.length = 0;
    renderLanding();
  });

  document.querySelector('#job').addEventListener('change', event => {
    state.job = event.target.value;
    renderLanding();
  });

  document.querySelectorAll('.season').forEach(button => {
    button.addEventListener('click', () => {
      state.season = button.dataset.season;
      renderLanding();
    });
  });

  document.querySelector('#create-calendar').addEventListener('click', () => {
    trackEvent('calendar_generated', state);
    location.hash = '#/calendar';
  });
}

function getSeasonOptions() {
  const year = today.getFullYear();
  const currentHalfOptions = today.getMonth() < 6 ? [`${year} 상반기`, `${year} 하반기`] : [`${year} 하반기`];
  return [
    ...currentHalfOptions,
    `${year + 1} 상반기`,
    `${year + 1} 하반기`,
    `${year + 2} 상반기`,
    `${year + 2} 하반기`,
  ];
}

function renderMonthView(monthDate, events, monthIndex, monthCount) {
  const monthEvents = monthEventsForSummary(events, monthDate);
  const recruitmentActive = monthEvents.some(event => event.layer === 'recruitment');
  const weeks = buildMonthWeeks(monthDate);
  const multiDayEvents = getVisibleMultiDayEvents(events, monthDate);

  return `
    <section class="month-section ${recruitmentActive ? 'recruitment-active' : ''} ${calendarTransition ? `turn-${calendarTransition}` : ''}">
      <div class="month-top">
        <div>
          <p>${monthDate.getFullYear()}년</p>
          <h2>${formatMonthLabel(monthDate)}</h2>
        </div>
        <div class="month-nav">
          <button id="prev-month" type="button" ${monthIndex === 0 ? 'disabled' : ''} aria-label="이전 달">
            <span>‹</span>
          </button>
          <span class="month-badge ${recruitmentActive ? 'active' : ''}">${monthIndex + 1} / ${monthCount}</span>
          <button id="next-month" type="button" ${monthIndex === monthCount - 1 ? 'disabled' : ''} aria-label="다음 달">
            <span>›</span>
          </button>
        </div>
      </div>
      <div class="month-grid">
        ${weeks.map(week => renderWeekBlock(week, events, multiDayEvents)).join('')}
      </div>
    </section>
  `;
}

function renderCalendar() {
  if (!state.track || !state.job || !state.season) {
    location.hash = '#/';
    return;
  }

  const events = getAllEvents();
  const monthDates = monthRange(today, targetSeasonDate());
  calendarViewIndex = clampCalendarViewIndex(monthDates.length);
  const visibleMonth = monthDates[calendarViewIndex];

  const previousAsideScrollTop = document.querySelector('aside')?.scrollTop ?? 0;

  app.innerHTML = `
    <div class="calendar-app">
      <header class="calendar-header">
        <a class="logo" href="#/">취뽀<span>달력</span></a>
        <div class="selection-summary">
          <b>${escapeHtml(state.track)}</b>
          <span>·</span>
          <b>${escapeHtml(state.job)}</b>
          <span>·</span>
          <span>${escapeHtml(state.season)}</span>
          <button id="edit-goal" type="button">수정</button>
        </div>
      </header>
      <div class="calendar-layout" id="calendar-layout" style="--sidebar-width:${sidebarWidth}px">
        <aside>
          ${quoteCardMarkup()}
          <section class="next-task">
            ${renderAccordionSection('dday', 'D-day', `
              ${(getCompanyDdayList().length || getCertificateDayItems().length) ? `
                <div class="dday-row">
                  ${getCompanyDdayList().length ? `
                    <div class="dday-group company-dday-list">
                      ${getCompanyDdayList().map(item => `
                        <div class="company-dday-pill">
                          <span>${escapeHtml(item.company)}</span>
                          <strong>D-${item.days}</strong>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                  ${getCertificateDayItems().length ? `
                    <div class="dday-group certificate-dday-list">
                      ${getCertificateDayItems().map(item => `
                        <div class="company-dday-pill certificate-pill">
                          <span>${escapeHtml(item.cert.name)}</span>
                          <strong>D-${item.days}</strong>
                          <button class="pill-edit" type="button" data-cert-goal-edit="${escapeHtml(item.cert.name)}">목표 ${item.targetWeeks}주</button>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              ` : ''}
            `)}
          </section>
          <section class="layer-panel">
            ${renderAccordionSection('layers', '표시할 일정', renderLayerChecklist())}
          </section>
          <section class="company-panel-section">
            ${renderAccordionSection('company', '관심 기업 추가하기', renderCompanyPanel())}
          </section>
          <section class="roadmap">
            ${renderAccordionSection('certificate', '추천 자격증', renderCertificatePlan())}
          </section>
          <section class="quick-add">
            ${renderAccordionSection('quickAdd', '일정 추가', `
              <form id="event-form" class="event-form">
                <input id="event-title" type="text" placeholder="일정 제목" maxlength="30" required />
                <input id="event-date" type="date" value="${toDateInputValue(today)}" required />
                <select id="event-layer">
                  ${Object.entries(LAYER_META).map(([key, meta]) => `<option value="${key}" ${key === 'personal' ? 'selected' : ''}>${meta.quickAddLabel}</option>`).join('')}
                </select>
                <textarea id="event-detail" rows="3" placeholder="메모"></textarea>
                <button type="submit" class="primary-button compact">일정 추가 <span>＋</span></button>
              </form>
            `)}
          </section>
        </aside>
        <div class="sidebar-resize-handle" id="sidebar-resize-handle" role="separator" aria-orientation="vertical" aria-label="사이드바 너비 조절"></div>
        <main class="month-stack">
          ${renderMonthView(visibleMonth, events, calendarViewIndex, monthDates.length)}
        </main>
      </div>
      <div class="detail" id="detail" hidden></div>
      ${activeCertificateGoalEditor ? renderCertificateGoalEditor(activeCertificateGoalEditor) : ''}
      ${toastMessage ? `<div class="toast" role="status" aria-live="polite">${escapeHtml(toastMessage)}</div>` : ''}
    </div>
  `;

  const newAsideEl = document.querySelector('aside');
  if (newAsideEl) newAsideEl.scrollTop = previousAsideScrollTop;

  document.querySelector('#edit-goal').addEventListener('click', () => {
    location.hash = '#/';
  });

  document.querySelectorAll('[data-cert]:not([data-cert-round])').forEach(button => {
    button.addEventListener('click', () => {
      const cert = findCertificateByName(button.dataset.cert);
      if (!cert) return;
      activeCertificatePicker = activeCertificatePicker === cert.name ? null : cert.name;
      renderCalendar();
    });
  });

  const certificateLibrarySelect = document.querySelector('#certificate-library-select');
  if (certificateLibrarySelect) {
    certificateLibrarySelect.addEventListener('change', event => {
      const cert = findCertificateByName(event.target.value);
      activeCertificateLibraryName = cert ? cert.name : null;
      activeCertificatePicker = cert ? cert.name : null;
      renderCalendar();
    });
  }

  document.querySelectorAll('[data-cert-round]').forEach(button => {
    button.addEventListener('click', () => {
      addCertificateSchedule(button.dataset.cert, button.dataset.certRound);
    });
  });

  document.querySelectorAll('[data-cert-goal-edit]').forEach(button => {
    button.addEventListener('click', () => {
      const cert = Object.values(CERTIFICATE_RECOMMENDATIONS).flat().find(item => item.name === button.dataset.certGoalEdit);
      if (!cert) return;
      activeCertificateGoalEditor = cert.name;
      renderCalendar();
    });
  });

  const goalEditor = document.querySelector('#certificate-goal-editor');
  if (goalEditor) {
    goalEditor.addEventListener('click', event => {
      if (event.target === goalEditor) {
        activeCertificateGoalEditor = null;
        renderCalendar();
      }
    });
    goalEditor.querySelector('[data-goal-close]')?.addEventListener('click', () => {
      activeCertificateGoalEditor = null;
      renderCalendar();
    });
    goalEditor.querySelector('#certificate-goal-form')?.addEventListener('submit', event => {
      event.preventDefault();
      const weeks = goalEditor.querySelector('#certificate-goal-weeks').value;
      const certName = goalEditor.dataset.certName;
      setCertificateTargetPrepWeeks(certName, weeks);
      activeCertificateGoalEditor = null;
      showToast(`${certName} 목표 준비기간이 ${weeks}주로 저장되었어요.`);
      renderCalendar();
    });
  }

  document.querySelectorAll('[data-cert-close]').forEach(button => {
    button.addEventListener('click', () => {
      activeCertificatePicker = null;
      renderCalendar();
    });
  });

  document.querySelectorAll('[data-company]').forEach(button => {
    button.addEventListener('click', () => {
      const company = button.dataset.company;
      toggleCompanySchedule(company);
    });
  });

  const companyLibrarySelect = document.querySelector('#company-library-select');
  if (companyLibrarySelect) {
    companyLibrarySelect.addEventListener('change', event => {
      const company = event.target.value;
      if (!company) return;
      addCompanySchedule(company);
    });
  }

  const companyManualToggle = document.querySelector('#company-manual-toggle');
  if (companyManualToggle) {
    companyManualToggle.addEventListener('click', () => {
      companyManualFormOpen = !companyManualFormOpen;
      renderCalendar();
    });
  }

  const companyManualForm = document.querySelector('#company-manual-form');
  if (companyManualForm) {
    companyManualForm.addEventListener('submit', event => {
      event.preventDefault();
      const name = document.querySelector('#company-manual-name').value.trim();
      const deadline = document.querySelector('#company-manual-deadline').value;
      const resumeStart = document.querySelector('#company-manual-resume-start').value;
      const resumeEnd = document.querySelector('#company-manual-resume-end').value;
      const aptitudeStart = document.querySelector('#company-manual-aptitude-start').value;
      const aptitudeEnd = document.querySelector('#company-manual-aptitude-end').value;
      addCompanyScheduleWithDates(name, deadline, resumeStart, resumeEnd, aptitudeStart, aptitudeEnd);
    });
  }

  const sidebarResizeHandle = document.querySelector('#sidebar-resize-handle');
  const calendarLayoutEl = document.querySelector('#calendar-layout');
  if (sidebarResizeHandle && calendarLayoutEl) {
    sidebarResizeHandle.addEventListener('mousedown', event => {
      event.preventDefault();
      const startX = event.clientX;
      const startWidth = sidebarWidth;

      const onMouseMove = moveEvent => {
        sidebarWidth = Math.max(240, Math.min(520, startWidth + (moveEvent.clientX - startX)));
        calendarLayoutEl.style.setProperty('--sidebar-width', `${sidebarWidth}px`);
      };
      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }

  const prevMonth = document.querySelector('#prev-month');
  const nextMonth = document.querySelector('#next-month');

  if (prevMonth) {
    prevMonth.addEventListener('click', () => {
      if (calendarViewIndex <= 0) return;
      calendarViewIndex -= 1;
      calendarTransition = 'prev';
      trackEvent('calendar_month_navigated', { direction: 'prev', month_index: calendarViewIndex });
      renderCalendar();
      setTimeout(() => { calendarTransition = ''; }, 450);
    });
  }

  if (nextMonth) {
    nextMonth.addEventListener('click', () => {
      if (calendarViewIndex >= monthDates.length - 1) return;
      calendarViewIndex += 1;
      calendarTransition = 'next';
      trackEvent('calendar_month_navigated', { direction: 'next', month_index: calendarViewIndex });
      renderCalendar();
      setTimeout(() => { calendarTransition = ''; }, 450);
    });
  }

  document.querySelectorAll('[data-layer]').forEach(input => {
    input.addEventListener('change', event => {
      layerState[event.target.dataset.layer] = event.target.checked;
      trackEvent('layer_toggle_used', {
        layer: event.target.dataset.layer,
        enabled: event.target.checked,
      });
      renderCalendar();
    });
  });

  document.querySelectorAll('[data-certificate-toggle]').forEach(input => {
    input.addEventListener('change', event => {
      certificateVisibility[event.target.dataset.certificateToggle] = event.target.checked;
      renderCalendar();
    });
  });

  document.querySelectorAll('[data-certificate-remove]').forEach(button => {
    button.addEventListener('click', () => {
      removeCertificateSchedule(button.dataset.certificateRemove);
    });
  });

  const eventForm = document.querySelector('#event-form');
  if (eventForm) {
    eventForm.addEventListener('submit', event => {
      event.preventDefault();
      const title = document.querySelector('#event-title').value.trim();
      const date = document.querySelector('#event-date').value;
      const layer = document.querySelector('#event-layer').value;
      const detail = document.querySelector('#event-detail').value.trim();

      if (!title || !date) return;

      customEvents.unshift({
        id: `custom-${Date.now()}`,
        title,
        start: date,
        end: date,
        layer,
        kind: layer === 'personal' ? '개인 일정' : '추가 일정',
        detail: detail || '사용자가 직접 추가한 일정입니다.',
      });

      trackEvent('custom_event_added', { layer, title });
      renderCalendar();
    });
  }

  document.querySelectorAll('[data-section-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.sectionToggle;
      sidebarSectionsOpen[key] = !sidebarSectionsOpen[key];
      renderCalendar();
    });
  });

  document.querySelectorAll('[data-event]').forEach(button => {
    button.addEventListener('click', () => {
      showDetail(events.find(event => event.id === button.dataset.event));
    });
  });

  document.querySelectorAll('[data-more-events]').forEach(button => {
    button.addEventListener('click', () => {
      activeMoreEventsDate = activeMoreEventsDate === button.dataset.moreEvents ? '' : button.dataset.moreEvents;
      renderCalendar();
    });
  });
}

function renderLayerChecklist() {
  const groups = new Map();
  Object.entries(LAYER_META).forEach(([key, meta]) => {
    if (!groups.has(meta.group)) groups.set(meta.group, []);
    groups.get(meta.group).push([key, meta]);
  });

  const certificateList = getSelectedCertificateList();

  return [...groups.entries()].map(([groupName, items], groupIndex) => {
    const groupLabelClass = groupIndex === 0 ? 'layer-group-label first' : 'layer-group-label';
    const typeCheckboxes = items.map(([key, meta]) => `
      <label class="layer-row">
        <input type="checkbox" data-layer="${key}" ${layerState[key] ? 'checked' : ''} />
        <i class="swatch ${meta.color}"></i>
        ${meta.label}
      </label>
    `).join('');

    if (groupName === '자격증 준비' && certificateList.length) {
      return `
        <p class="${groupLabelClass}">${escapeHtml(groupName)}</p>
        <div class="layer-columns">
          <div class="layer-column">
            <p class="layer-subgroup-label">유형별로 보기</p>
            ${typeCheckboxes}
          </div>
          <div class="layer-column">
            <p class="layer-subgroup-label">자격증별로 보기</p>
            ${certificateList.map(item => `
              <div class="layer-row certificate-row">
                <label class="certificate-row-label">
                  <input type="checkbox" data-certificate-toggle="${escapeHtml(item.cert.name)}" ${certificateVisibility[item.cert.name] === false ? '' : 'checked'} />
                  <i class="swatch certificate"></i>
                  ${escapeHtml(item.cert.name)}
                </label>
                <button class="certificate-remove-button" type="button" data-certificate-remove="${escapeHtml(item.cert.name)}" aria-label="${escapeHtml(item.cert.name)} 삭제">×</button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <p class="${groupLabelClass}">${escapeHtml(groupName)}</p>
      ${typeCheckboxes}
    `;
  }).join('');
}

function renderCertificatePlan() {
  const recommendations = getCertificateRecommendations();
  const allCertificates = getUniqueCertificateList();
  const activeLibraryCert = allCertificates.find(cert => cert.name === activeCertificateLibraryName) || null;

  return `
    <div class="certificate-list">
      <select id="certificate-library-select" class="certificate-library-select">
        <option value="">자격증을 선택하세요</option>
        ${allCertificates.map(cert => `
          <option value="${escapeHtml(cert.name)}" ${activeLibraryCert?.name === cert.name ? 'selected' : ''}>${escapeHtml(cert.name)}</option>
        `).join('')}
      </select>
      ${activeLibraryCert ? `
        <div class="certificate-selected-preview">
          <p class="panel-label">선택한 자격증</p>
          <div class="certificate-card preview-card ${activeCertificatePicker === activeLibraryCert.name ? 'expanded' : ''}">
            <div class="certificate-head">
              <span class="priority">${activeLibraryCert.rank}순위</span>
              <strong>${escapeHtml(activeLibraryCert.name)}</strong>
              <small>${escapeHtml(getCertificatePriorityCompanies(activeLibraryCert.name).join(', '))}</small>
            </div>
            <div class="certificate-body">
              <p>${escapeHtml(activeLibraryCert.description)}</p>
              <button class="secondary-button" type="button" data-cert="${escapeHtml(activeLibraryCert.name)}" aria-expanded="${activeCertificatePicker === activeLibraryCert.name ? 'true' : 'false'}">내 캘린더 추가하기</button>
              ${activeCertificatePicker === activeLibraryCert.name ? renderCertificatePicker(activeLibraryCert) : ''}
              ${activeCertificatePicker === activeLibraryCert.name ? '<p class="picker-hint">선택하면 일정이 바로 캘린더에 추가돼요.</p>' : ''}
            </div>
          </div>
        </div>
      ` : ''}
      ${recommendations.map(cert => `
        <div class="certificate-card ${cert.seriesClass} ${activeCertificatePicker === cert.name ? 'expanded' : ''}">
          <div class="certificate-head">
            <span class="priority">${cert.rank}순위</span>
            <strong>${escapeHtml(cert.name)}</strong>
            <small>${escapeHtml(getCertificatePriorityCompanies(cert.name).length ? `${getCertificatePriorityCompanies(cert.name).join(', ')} 우대` : '우대 기업 정보 없음')}</small>
          </div>
          <div class="certificate-body">
            <p>${escapeHtml(cert.description)}</p>
            <button class="secondary-button" type="button" data-cert="${escapeHtml(cert.name)}" aria-expanded="${activeCertificatePicker === cert.name ? 'true' : 'false'}">내 캘린더 추가하기</button>
            ${activeCertificatePicker === cert.name ? renderCertificatePicker(cert) : ''}
            ${activeCertificatePicker === cert.name ? '<p class="picker-hint">선택하면 일정이 바로 캘린더에 추가돼요.</p>' : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCompanyPanel() {
  const recommendations = getCompanyRecommendations();
  const recommendationNames = new Set(recommendations.map(company => company.name));
  const allCompanies = getUniqueCompanyList();
  const extraSelected = selectedCompanies
    .filter(name => !recommendationNames.has(name))
    .map(name => allCompanies.find(company => company.name === name) || { name, style: 'brand' });
  const pillList = [...recommendations, ...extraSelected];

  return `
    <section class="company-panel">
      <select id="company-library-select" class="certificate-library-select">
        <option value="">전체 기업에서 선택하기</option>
        ${Object.entries(COMPANY_RECOMMENDATIONS).map(([track, companies]) => `
          <optgroup label="${escapeHtml(track)}">
            ${companies.map(company => `<option value="${escapeHtml(company.name)}">${escapeHtml(company.name)}</option>`).join('')}
          </optgroup>
        `).join('')}
      </select>
      <div class="company-panel-head">
        <strong>유망 기업</strong>
      </div>
      <div class="company-list">
        ${pillList.map((company, index) => `
          <button class="company-pill ${company.style} ${selectedCompanies.includes(company.name) ? 'selected' : ''}" type="button" data-company="${escapeHtml(company.name)}" data-order="${index}">
            ${escapeHtml(company.name)}
          </button>
        `).join('')}
      </div>
      <button class="link-button" type="button" id="company-manual-toggle">
        ${companyManualFormOpen ? '기업 직접 입력하기 닫기' : '기업 직접 입력하기'}
      </button>
      ${companyManualFormOpen ? `
        <form id="company-manual-form" class="company-manual-form">
          <input id="company-manual-name" type="text" placeholder="기업명" maxlength="30" required />
          <label class="company-manual-field">
            서류 지원 마감
            <input id="company-manual-deadline" type="date" required />
          </label>
          <label class="company-manual-field">
            서류 준비
            <span class="date-range-inputs">
              <input id="company-manual-resume-start" type="date" required />
              <span>~</span>
              <input id="company-manual-resume-end" type="date" required />
            </span>
          </label>
          <label class="company-manual-field">
            인적성 준비
            <span class="date-range-inputs">
              <input id="company-manual-aptitude-start" type="date" required />
              <span>~</span>
              <input id="company-manual-aptitude-end" type="date" required />
            </span>
          </label>
          <button class="primary-button compact" type="submit">추가</button>
        </form>
      ` : ''}
    </section>
  `;
}

function renderCertificatePicker(cert) {
  const options = getCertificateRoundOptions(cert);
  return `
    <div class="certificate-picker-card" aria-label="${escapeHtml(cert.name)} 회차 선택">
      <div class="picker-head">
        <p class="panel-label">회차 선택</p>
        <button class="picker-close" type="button" data-cert-close aria-label="닫기">×</button>
      </div>
      <p class="picker-desc">어느 회차를 캘린더에 넣을지 고르세요.</p>
      <div class="picker-list">
        ${options.map(option => `
          <button class="picker-option" type="button" data-cert-round="${option.round}" data-cert="${escapeHtml(cert.name)}">
            <strong>${option.label}</strong>
            <span>${escapeHtml(option.summary)}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function findCertificateByName(name) {
  return Object.values(CERTIFICATE_RECOMMENDATIONS).flat().find(item => item.name === name);
}

function renderCertificateGoalEditor(certName) {
  const cert = findCertificateByName(certName);
  const currentWeeks = cert ? getCertificateTargetPrepWeeks(cert) : 4;
  return `
    <div class="modal-card certificate-goal-card" id="certificate-goal-editor" data-cert-name="${escapeHtml(certName)}" role="dialog" aria-modal="true">
      <div class="picker-head">
        <p class="panel-label">목표 기간 편집</p>
        <button class="picker-close" type="button" data-goal-close aria-label="닫기">×</button>
      </div>
      <h3>${escapeHtml(certName)}</h3>
      <form id="certificate-goal-form" class="goal-form">
        <label>
          목표 준비 기간(주)
          <input id="certificate-goal-weeks" type="number" min="1" max="52" value="${currentWeeks}" />
        </label>
        <button class="primary-button compact" type="submit">저장</button>
      </form>
    </div>
  `;
}

function addCompanySchedule(companyName) {
  if (!companyName) return;
  const recommendations = getCompanyRecommendations();
  const found = recommendations.find(item => item.name === companyName);
  const index = found ? recommendations.indexOf(found) : 0;
  const storedIndex = customCompanyEvents.findIndex(item => item.name === companyName);
  if (storedIndex >= 0) customCompanyEvents.splice(storedIndex, 1);
  customCompanyEvents.unshift({ name: companyName, order: index });
  if (!selectedCompanies.includes(companyName)) {
    selectedCompanies.unshift(companyName);
  }
  layerState.recruitment = true;
  layerState.aptitude = true;
  layerState.resume = true;
  const monthDates = monthRange(today, targetSeasonDate());
  const deadlineMonthIndex = monthDates.findIndex(monthDate => {
    const deadline = addDays(targetSeasonDate(), -21);
    return monthDate.getFullYear() === deadline.getFullYear() && monthDate.getMonth() === deadline.getMonth();
  });
  if (deadlineMonthIndex >= 0) {
    calendarViewIndex = deadlineMonthIndex;
  }
  trackEvent('company_schedule_added', { company: companyName, source: found ? 'recommendation' : 'search' });
  renderCalendar();
}

function removeCompanySchedule(companyName) {
  const selectedIndex = selectedCompanies.indexOf(companyName);
  if (selectedIndex >= 0) selectedCompanies.splice(selectedIndex, 1);
  const customIndex = customCompanyEvents.findIndex(item => item.name === companyName);
  if (customIndex >= 0) customCompanyEvents.splice(customIndex, 1);
  trackEvent('company_schedule_removed', { company: companyName });
  renderCalendar();
}

function toggleCompanySchedule(companyName) {
  if (selectedCompanies.includes(companyName)) {
    removeCompanySchedule(companyName);
  } else {
    addCompanySchedule(companyName);
  }
}

function addCompanyScheduleWithDates(companyName, deadlineValue, resumeStartValue, resumeEndValue, aptitudeStartValue, aptitudeEndValue) {
  const trimmed = String(companyName || '').trim();
  if (!trimmed || !deadlineValue || !resumeStartValue || !resumeEndValue || !aptitudeStartValue || !aptitudeEndValue) return;

  const toDate = value => new Date(`${value}T12:00:00`);
  const manualDates = {
    deadline: toDate(deadlineValue),
    resumeStart: toDate(resumeStartValue),
    resumeEnd: toDate(resumeEndValue),
    aptitudeStart: toDate(aptitudeStartValue),
    aptitudeEnd: toDate(aptitudeEndValue),
  };

  const recommendations = getCompanyRecommendations();
  const found = recommendations.find(item => item.name === trimmed);
  const index = found ? recommendations.indexOf(found) : 0;

  const storedIndex = customCompanyEvents.findIndex(item => item.name === trimmed);
  if (storedIndex >= 0) customCompanyEvents.splice(storedIndex, 1);
  customCompanyEvents.unshift({ name: trimmed, order: index, manualDates });

  if (!selectedCompanies.includes(trimmed)) {
    selectedCompanies.unshift(trimmed);
  }
  layerState.recruitment = true;
  layerState.aptitude = true;
  layerState.resume = true;
  companyManualFormOpen = false;
  trackEvent('company_schedule_added_manual', { company: trimmed });
  showToast(`${trimmed} 일정이 직접 입력한 날짜로 캘린더에 추가되었어요.`);
  renderCalendar();
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function showDetail(event) {
  if (!event) return;
  const detail = document.querySelector('#detail');
  detail.hidden = false;
  detail.innerHTML = `
    <button class="close-detail" aria-label="닫기">×</button>
    <p>${escapeHtml(event.kind)}</p>
    <h2>${escapeHtml(event.title)}</h2>
    <strong>${formatRange(event.start, event.end)}까지</strong>
    <div>${escapeHtml(event.detail)}</div>
    ${event.custom ? '<button class="delete-detail" type="button">삭제</button>' : ''}
  `;

  detail.querySelector('.close-detail').addEventListener('click', () => {
    detail.hidden = true;
  });

  const deleteButton = detail.querySelector('.delete-detail');
  if (deleteButton) {
    deleteButton.addEventListener('click', () => {
      const index = customEvents.findIndex(item => item.id === event.id);
      if (index >= 0) {
        customEvents.splice(index, 1);
      }
      detail.hidden = true;
      renderCalendar();
    });
  }
}

function router() {
  if (location.hash === '#/calendar') {
    renderCalendar();
    return;
  }
  renderLanding();
}

window.addEventListener('hashchange', router);
trackEvent('page_view', { page: 'landing' });
router();
