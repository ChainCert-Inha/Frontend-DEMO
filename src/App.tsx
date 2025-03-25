import React, { useState } from 'react';
import { Bell, Award, FileText, User, LogOut, Search, Shield, Calendar } from 'lucide-react';
import Landing from './components/Landing';
import Dashboard from './components/dashboard';
import VerificationSystem from './components/verification';
import VerificationHistory from './components/verification-history';
import UserProfile from './components/profile';
import CertificateDetail from './components/certificate-detail';

// 인터페이스 정의
interface Certificate {
  id: number;
  name: string;
  date: string;
  issuer: string;
  verified: boolean;
  txHash?: string;
  description: string;
  skills?: string[];
  hours?: number;
  instructor?: string;
  grade?: string;
  achievement?: string;
  teamName?: string;
  projectName?: string;
  teammates?: string[];
  programDuration?: string;
  activities?: string[];
  leadershipScore?: number;
  pendingReason?: string;
  level?: string;
  score?: number;
  attendance?: string;
  prize?: string;
  ideaTitle?: string;
  mentors?: string[];
  projectTitle?: string;
}

interface VerificationRecord {
  id: number;
  cert: string;
  verifier: string;
  date: string;
  purpose: string;
  status: string;
  verifierContact: string;
}

interface UserInfo {
  name: string;
  studentId: string;
  department: string;
  email: string;
  phone: string;
  enrollDate: string;
  totalCerts: number;
  publicKey: string;
  walletAddress: string;
  profileImage: string;
}

// Dashboard 컴포넌트의 props 인터페이스
interface DashboardProps {
  certificates: Certificate[];
  userInfo: UserInfo;
  onCertClick: (cert: Certificate) => void;
}

// VerificationHistory 컴포넌트의 props 인터페이스
interface VerificationHistoryProps {
  verificationHistory: VerificationRecord[];
}

// UserProfile 컴포넌트의 props 인터페이스
interface UserProfileProps {
  userInfo: UserInfo;
}

// CertificateDetail 컴포넌트의 props 인터페이스
interface CertificateDetailProps {
  cert: Certificate | null;
  onClose: () => void;
}

// VerificationSystem 컴포넌트의 props 인터페이스
interface VerificationSystemProps {
  userInfo: UserInfo;
}

const ChainCertApp = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  
  const handleCertClick = (cert: Certificate) => {
    setSelectedCert(cert);
    setShowCertModal(true);
  };
  
  // 사용자 프로필 정보
  const userInfo: UserInfo = {
    name: '김인하',
    studentId: '12201234',
    department: '컴퓨터공학과',
    email: 'inha.kim@inha.edu',
    phone: '010-1234-5678',
    enrollDate: '2022-03-02',
    totalCerts: 12,
    publicKey: '0x72f83a1b4c9e2d7f6a5b3c8e9d0f1e2a3b4c5d6e',
    walletAddress: '0x3Fc91A3aD69ea588643C47D596ED0e29',
    profileImage: '/api/placeholder/150/150'
  };

  // 증명서 목록
  const certificates: Certificate[] = [
    { 
      id: 1, 
      name: '데이터 분석 기초 과정 수료증', 
      date: '2024-08-15', 
      issuer: '인하대학교 컴퓨터공학과', 
      verified: true,
      txHash: '0x72f8e3a1b4c9e2d7f6a5b3c8e9d0f1e2a3b4c5d6e7f8a9b0c1d2e3f',
      description: '데이터 분석의 기초 개념과 파이썬을 활용한 데이터 처리 및 시각화 기법을 학습한 과정 수료',
      skills: ['Python', 'Pandas', 'Data Visualization', 'Statistics'],
      hours: 40,
      instructor: '김교수',
      grade: 'A'
    },
    { 
      id: 2, 
      name: '블록체인 해커톤 참가 인증서', 
      date: '2024-09-22', 
      issuer: '인하대학교 SW중심대학사업단', 
      verified: true,
      txHash: '0x83e9d2c5f0a1b7e6d4c3b2a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c',
      description: '2024 인하대학교 블록체인 해커톤 대회 참가 및 우수상 수상 인증',
      achievement: '우수상',
      teamName: 'ChainMasters',
      projectName: 'ChainCert - 블록체인 기반 증명서 시스템',
      teammates: ['이코딩', '박블록', '최개발']
    },
    { 
      id: 3, 
      name: '리더십 프로그램 수료증', 
      date: '2024-06-30', 
      issuer: '인하대학교 학생처', 
      verified: true,
      txHash: '0x91b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7',
      description: '리더십 역량 강화를 위한 인하리더 프로그램 과정 수료',
      programDuration: '2024-05-01 ~ 2024-06-30',
      activities: ['팀 프로젝트', '사회봉사활동', '리더십 워크샵'],
      leadershipScore: 92
    },
    { 
      id: 4, 
      name: '영어 회화 중급 과정 수료증', 
      date: '2024-05-10', 
      issuer: '인하대학교 어학원', 
      verified: false,
      pendingReason: '검증 진행 중',
      description: '실용 영어 회화 중급 과정 수료',
      level: 'Intermediate',
      score: 87,
      instructor: 'John Smith',
      attendance: '95%'
    },
    {
      id: 5,
      name: '창업 아이디어 경진대회 우승 인증서',
      date: '2024-07-15',
      issuer: '인하대학교 창업지원단',
      verified: true,
      txHash: '0x45d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1',
      description: '2024 인하 창업 아이디어 경진대회 대상 수상',
      achievement: '대상',
      prize: '상금 300만원',
      ideaTitle: '블록체인 기반 학생 포트폴리오 플랫폼',
      mentors: ['박창업 교수', '김벤처 대표']
    },
    {
      id: 6,
      name: '인하 AI 부트캠프 수료증',
      date: '2024-04-30',
      issuer: '인하대학교 AI연구센터',
      verified: true,
      txHash: '0x37c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3',
      description: '인공지능 기초 및 응용 기술 집중 학습 부트캠프 수료',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
      projectTitle: '얼굴 인식 기반 출석 시스템',
      hours: 120,
      grade: 'A+'
    }
  ];

  // 인증 활동 내역
  const verificationHistory: VerificationRecord[] = [
    { 
      id: 1, 
      cert: '데이터 분석 기초 과정 수료증', 
      verifier: '네이버 채용팀', 
      date: '2024-10-15',
      purpose: '인턴십 지원',
      status: '인증 성공',
      verifierContact: 'recruit@naver.com'
    },
    { 
      id: 2, 
      cert: '블록체인 해커톤 참가 인증서', 
      verifier: '카카오 블록체인 개발팀', 
      date: '2024-10-01',
      purpose: '기술 직무 지원',
      status: '인증 성공',
      verifierContact: 'blockchain@kakao.com'
    },
    { 
      id: 3, 
      cert: '인하 AI 부트캠프 수료증', 
      verifier: 'SK 하이닉스', 
      date: '2024-09-22',
      purpose: '신입 공채 지원',
      status: '인증 성공',
      verifierContact: 'recruit@skhynix.com'
    },
    { 
      id: 4, 
      cert: '창업 아이디어 경진대회 우승 인증서', 
      verifier: '인하대학교 대학원', 
      date: '2024-09-10',
      purpose: '대학원 입학 지원',
      status: '인증 성공',
      verifierContact: 'grad@inha.ac.kr'
    }
  ];

  // 랜딩 페이지 표시
  if (showLandingPage) {
    return <Landing onEnterApp={() => setShowLandingPage(false)} />;
  }


  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <div className="w-64 bg-blue-900 text-white">
        <div className="p-4 text-center border-b border-blue-800">
          <h1 className="text-xl font-bold">ChainCert</h1>
          <p className="text-xs mt-1 text-blue-200">블록체인 증명서 시스템</p>
        </div>
        
        <div className="mt-8">
          <ul>
            <li 
              className={`flex items-center pl-6 py-3 cursor-pointer ${activeTab === 'dashboard' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Award size={18} className="mr-3" /> 
              <span>증명서 대시보드</span>
            </li>
            <li 
              className={`flex items-center pl-6 py-3 cursor-pointer ${activeTab === 'verify' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              onClick={() => setActiveTab('verify')}
            >
              <Shield size={18} className="mr-3" /> 
              <span>증명서 검증</span>
            </li>
            <li 
              className={`flex items-center pl-6 py-3 cursor-pointer ${activeTab === 'history' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              onClick={() => setActiveTab('history')}
            >
              <FileText size={18} className="mr-3" /> 
              <span>인증 활동 내역</span>
            </li>
            <li 
              className={`flex items-center pl-6 py-3 cursor-pointer ${activeTab === 'profile' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} className="mr-3" /> 
              <span>내 프로필</span>
            </li>
          </ul>
        </div>
        
        <div className="absolute bottom-0 w-64 border-t border-blue-800">
          <div 
            className="flex items-center p-4 cursor-pointer hover:bg-blue-800"
            onClick={() => setShowLandingPage(true)}
          >
            <LogOut size={18} className="mr-3" />
            <span>로그아웃</span>
          </div>
        </div>
      </div>
      
      {/* 메인 컨텐츠 */}
      <div className="flex-1 overflow-y-auto">
        {/* 헤더 */}
        <header className="bg-white p-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center">
            <div className="text-xl font-semibold text-gray-800">
              {activeTab === 'dashboard' ? '증명서 대시보드' : 
               activeTab === 'verify' ? '증명서 검증' : 
               activeTab === 'history' ? '인증 활동 내역' : '내 프로필'}
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <Bell size={20} className="text-gray-500 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
                {userInfo.name.charAt(0)}
              </div>
              <span className="text-sm text-gray-700">{userInfo.name}</span>
            </div>
          </div>
        </header>
        
        {/* 탭 컨텐츠 */}
        {activeTab === 'dashboard' && (
          <Dashboard 
            certificates={certificates} 
            userInfo={userInfo} 
            onCertClick={handleCertClick} 
          />
        )}
        
        {activeTab === 'verify' && (
          <VerificationSystem />
        )}
        
        {activeTab === 'history' && (
          <VerificationHistory verificationHistory={verificationHistory} />
        )}
        
        {activeTab === 'profile' && (
          <UserProfile userInfo={userInfo} />
        )}
        
        {/* 증명서 상세 모달 */}
        {showCertModal && selectedCert && (
          <CertificateDetail 
            certificate={selectedCert} 
            userInfo={userInfo}
            onClose={() => setShowCertModal(false)} 
          />
        )}
      </div>
    </div>
  );
};


export default ChainCertApp;