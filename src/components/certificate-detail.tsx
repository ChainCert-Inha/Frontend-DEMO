import React from 'react';
import { Shield, Download } from 'lucide-react';

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

interface CertificateDetailProps {
  certificate: Certificate | null;
  userInfo: UserInfo;
  onClose: () => void;
}

const CertificateDetail = ({ certificate, userInfo, onClose }: CertificateDetailProps) => {
  if (!certificate) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden">
      <div className="bg-white rounded-lg w-2/3 max-w-3xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">증명서 상세 정보</h2>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="border p-8 mb-6 relative">
            {/* 증명서 워터마크 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <img 
                src="/api/placeholder/200/80" 
                alt="인하대학교 로고"
                className="w-64"
              />
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-1">{certificate.name}</h1>
              <p className="text-gray-500">발급번호: INHA-CERT-{new Date().getFullYear()}-{certificate.id.toString().padStart(4, '0')}</p>
            </div>
            
            <div className="text-center mb-8">
              <p className="mb-2">이 증명서는 아래 학생이 성공적으로 과정을 이수하였음을 증명합니다.</p>
              <p className="text-xl font-bold">{userInfo.name}</p>
              <p className="text-gray-600">{userInfo.department} / 학번: {userInfo.studentId}</p>
              {certificate.description && (
                <p className="mt-4 text-gray-700 italic">"{certificate.description}"</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-r pr-4">
                <p className="text-gray-500 mb-1">발급일</p>
                <p>{certificate.date}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">발급 기관</p>
                <p>{certificate.issuer}</p>
              </div>
              {certificate.skills && (
                <div className="col-span-2 mt-4 border-t pt-4">
                  <p className="text-gray-500 mb-1">습득 기술</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {certificate.skills.map((skill: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {certificate.achievement && (
                <div className="col-span-2 mt-4 border-t pt-4">
                  <p className="text-gray-500 mb-1">성취</p>
                  <p className="font-semibold text-blue-800">{certificate.achievement}</p>
                  {certificate.prize && <p className="text-gray-600 text-sm">{certificate.prize}</p>}
                </div>
              )}
            </div>
            
            <div className="text-center mb-4">
              <div className="inline-block border p-3 rounded">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="QR 코드"
                  className="w-32 h-32"
                />
                <p className="text-xs mt-2 text-gray-500">블록체인 검증 QR 코드</p>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>블록체인 트랜잭션 해시: {certificate.verified ? certificate.txHash : '인증 대기중'}</p>
              <p>이 증명서는 ChainCert 블록체인 인증 시스템에 의해 발급되었으며, 위변조가 불가능합니다.</p>
            </div>
          </div>
          
          <div className="flex justify-between">
            <button 
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              onClick={onClose}
            >
              닫기
            </button>
            <div className="flex">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mr-2 flex items-center">
                <Shield size={16} className="mr-1" />
                증명서 검증
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
                <Download size={16} className="mr-1" />
                다운로드
              </button>
            </div>
          </div>
          
          {/* 블록체인 검증 정보 섹션 */}
          <div className="mt-6 border-t pt-6">
            <h3 className="text-lg font-semibold mb-3">블록체인 검증 정보</h3>
            <div className="bg-gray-50 p-4 rounded-lg text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 mb-1">발급자 공개키</p>
                  <p className="font-mono text-xs truncate">{certificate.verified ? "0x45d9e8f1a2b3c4d5e6f7" : "미검증"}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">블록 타임스탬프</p>
                  <p>{certificate.verified ? certificate.date + " 09:14:32 UTC" : "미검증"}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500 mb-1">트랜잭션 해시</p>
                  <p className="font-mono text-xs truncate">{certificate.verified ? certificate.txHash : "미검증"}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500 mb-1">검증 상태</p>
                  {certificate.verified ? (
                    <p className="text-green-600 flex items-center">
                      <Shield size={14} className="mr-1" /> 
                      검증됨 - Polygon 네트워크에서 확인됨
                    </p>
                  ) : (
                    <p className="text-yellow-600">
                      {certificate.pendingReason || "검증 대기중"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetail;