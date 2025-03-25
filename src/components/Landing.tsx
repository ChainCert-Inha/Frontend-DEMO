import React from 'react';
import { Shield, ChevronRight, Globe, Briefcase, Building } from 'lucide-react';

interface LandingProps {
  onEnterApp: () => void;
}

const Landing = ({ onEnterApp }: LandingProps) => {
  // 기업 및 기관 사용자 정보
  const orgUsers = [
    {
      id: 1,
      name: '인하대학교 컴퓨터공학과',
      type: '교육기관',
      issuedCerts: 1458,
      activeSince: '2023-05',
      plan: 'Enterprise',
      logo: '/api/placeholder/64/64'
    },
    {
      id: 2,
      name: '인하대학교 SW중심대학사업단',
      type: '교육기관',
      issuedCerts: 876,
      activeSince: '2023-06',
      plan: 'Enterprise',
      logo: '/api/placeholder/64/64'
    },
    {
      id: 3,
      name: '네이버',
      type: '기업',
      verifiedCerts: 543,
      activeSince: '2023-09',
      plan: 'Business',
      logo: '/api/placeholder/64/64'
    },
    {
      id: 4,
      name: '카카오',
      type: '기업',
      verifiedCerts: 412,
      activeSince: '2023-10',
      plan: 'Business',
      logo: '/api/placeholder/64/64'
    }
  ];

  // 통계 데이터
  const statsData = {
    totalCerts: 12480,
    activeUsers: 5840,
    totalVerifications: 28945,
    averageVerificationTime: '3.2초',
    monthlyGrowth: 18.5,
    topCategories: [
      { name: '교육 수료', percentage: 42 },
      { name: '대회/경진대회', percentage: 28 },
      { name: '자격증', percentage: 18 },
      { name: '인턴십/현장실습', percentage: 12 }
    ]
  };

  return (
    <div className="w-full">
      {/* 헤더 */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield size={24} className="mr-2" />
            <span className="text-xl font-bold">ChainCert</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="hover:text-blue-200">특징</a>
            <a href="#how-it-works" className="hover:text-blue-200">이용방법</a>
            <a href="#pricing" className="hover:text-blue-200">요금제</a>
            <a href="#customers" className="hover:text-blue-200">고객사</a>
          </nav>
          <div>
            <button 
              className="bg-white text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-100"
              onClick={onEnterApp}
            >
              데모 체험하기
            </button>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              블록체인으로 신뢰할 수 있는<br/>디지털 증명서 플랫폼
            </h1>
            <p className="text-xl mb-8">
              위조 불가능한 블록체인 기술로 학위, 자격증, 수료증을 안전하게 발급하고 관리하세요.
            </p>
            <div className="flex space-x-4">
              <button 
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-100"
                onClick={onEnterApp}
              >
                무료로 시작하기
              </button>
              <button className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800">
                자세히 알아보기
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/api/placeholder/500/400" 
              alt="ChainCert 플랫폼 소개" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-900">{statsData.totalCerts.toLocaleString()}+</p>
              <p className="text-gray-600">발급된 증명서</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">{statsData.activeUsers.toLocaleString()}+</p>
              <p className="text-gray-600">활성 사용자</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">{statsData.totalVerifications.toLocaleString()}+</p>
              <p className="text-gray-600">증명서 검증</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">{statsData.averageVerificationTime}</p>
              <p className="text-gray-600">평균 검증 시간</p>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">ChainCert의 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">위변조 불가능</h3>
              <p className="text-gray-600">블록체인 기술로 발급된 모든 증명서는 변경이 불가능하며 영구적으로 보존됩니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">즉시 검증</h3>
              <p className="text-gray-600">QR코드나 링크를 통해 어디서든 즉시 증명서의 진위를 확인할 수 있습니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Briefcase size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">인재 검증 간소화</h3>
              <p className="text-gray-600">기업은 지원자의 자격을 빠르고 신뢰성 있게 검증할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 사용 방법 섹션 */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">이용 방법</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">증명서 발급</h3>
              <p className="text-gray-600">학교나 기관이 블록체인에 디지털 증명서를 발급합니다.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">학생 접근</h3>
              <p className="text-gray-600">학생은 자신의 계정에서 모든 증명서에 접근하고 공유할 수 있습니다.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">즉시 검증</h3>
              <p className="text-gray-600">기업이나 기관은 공유된 링크로 증명서를 즉시 검증할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 요금제 섹션 */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">요금제</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-3xl font-bold mb-4">₩19,900<span className="text-sm text-gray-600">/월</span></p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />월 100건 인증서 발급</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />기본 검증 도구</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />이메일 지원</li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800">
                시작하기
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-bold rounded-bl">인기</div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-3xl font-bold mb-4">₩49,900<span className="text-sm text-gray-600">/월</span></p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />월 500건 인증서 발급</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />고급 검증 도구</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />우선 지원</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />커스텀 브랜딩</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                시작하기
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">문의<span className="text-sm text-gray-600">/년</span></p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />무제한 인증서 발급</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />맞춤형 통합 API</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />전담 지원 매니저</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-blue-600 mr-2" />SLA 계약</li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800">
                문의하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 고객사 섹션 */}
      <section id="customers" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">신뢰하는 고객사</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {orgUsers.map(org => (
              <div key={org.id} className="flex flex-col items-center">
                <img src={org.logo} alt={org.name} className="mb-4 w-16 h-16" />
                <p className="font-medium text-center">{org.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            블록체인으로 증명서 발급과 검증 과정을 혁신하고 신뢰할 수 있는 디지털 자격 증명 시스템을 구축하세요.
          </p>
          <button 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-100"
            onClick={onEnterApp}
          >
            무료 데모 체험하기
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <Shield size={20} className="mr-2" />
                <span className="text-lg font-bold">ChainCert</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                블록체인 기반 디지털 증명서 발급 및 검증 플랫폼
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">제품</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">특징</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">가격</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">사용 사례</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">회사</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">소개</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">블로그</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">연락처</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">법적 정보</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">이용약관</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">개인정보처리방침</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ChainCert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;