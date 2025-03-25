import React from 'react';
import { Calendar, Search, Award, Shield } from 'lucide-react';

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

interface DashboardProps {
  certificates: Certificate[];
  userInfo: UserInfo;
  onCertClick: (cert: Certificate) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ certificates, userInfo, onCertClick }) => {
  // 인증된 증명서와 미인증 증명서 분리
  const verifiedCerts = certificates.filter(cert => cert.verified);
  const pendingCerts = certificates.filter(cert => !cert.verified);
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">증명서 대시보드</h1>
        <div className="flex items-center">
          <div className="relative mr-2">
            <input
              type="text"
              placeholder="증명서 검색..."
              className="pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            새 증명서 요청
          </button>
        </div>
      </div>
      
      {/* 대시보드 통계 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <Award size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">총 증명서</p>
            <p className="text-xl font-bold">{certificates.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <Shield size={24} className="text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">인증된 증명서</p>
            <p className="text-xl font-bold">{verifiedCerts.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-yellow-100 p-3 mr-4">
            <Calendar size={24} className="text-yellow-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">대기 중인 증명서</p>
            <p className="text-xl font-bold">{pendingCerts.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <Shield size={24} className="text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">인증 활동</p>
            <p className="text-xl font-bold">4</p>
          </div>
        </div>
      </div>
      
      {/* 증명서 목록 */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b">
          <h2 className="font-semibold">내 증명서 목록</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  증명서 이름
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  발급 날짜
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  발급 기관
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  액션
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {certificates.map((cert) => (
                <tr key={cert.id} onClick={() => onCertClick(cert)} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{cert.name}</div>
                        <div className="text-sm text-gray-500">{cert.description.substring(0, 50)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{cert.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{cert.issuer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cert.verified ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        인증됨
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {cert.pendingReason || "대기중"}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900">상세 보기</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 최근 인증 활동 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="font-semibold">최근 인증 활동</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  네이버 채용팀이 <span className="font-semibold">데이터 분석 기초 과정 수료증</span>을 인증했습니다.
                </p>
                <p className="text-sm text-gray-500">
                  2024-10-15 · 인턴십 지원
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  카카오 블록체인 개발팀이 <span className="font-semibold">블록체인 해커톤 참가 인증서</span>를 인증했습니다.
                </p>
                <p className="text-sm text-gray-500">
                  2024-10-01 · 기술 직무 지원
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  SK 하이닉스가 <span className="font-semibold">인하 AI 부트캠프 수료증</span>을 인증했습니다.
                </p>
                <p className="text-sm text-gray-500">
                  2024-09-22 · 신입 공채 지원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;