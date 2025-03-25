import React from 'react';
import { Search, Shield } from 'lucide-react';

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

interface VerificationSystemProps {
  userInfo?: UserInfo;
}

const VerificationSystem = ({ userInfo }: VerificationSystemProps) => {
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">증명서 검증 시스템</h2>
          <p className="text-sm text-gray-500 mt-1">블록체인에 기록된 증명서의 진위 여부를 확인합니다</p>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-32 h-32 mx-auto border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500">
              <div className="text-center">
                <Search size={32} className="mx-auto text-gray-400" />
                <p className="text-sm text-gray-500 mt-2">QR 코드 스캔</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="text-center mb-4">
              <p className="text-gray-700">또는</p>
            </div>
            <div className="flex">
              <input
                type="text"
                defaultValue="0x45d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1"
                placeholder="블록체인 증명서 ID 입력"
                className="flex-1 border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r">
                검증하기
              </button>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Shield size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-green-600">인증 성공!</h3>
                <p className="text-sm text-gray-600">유효한 증명서가 확인되었습니다.</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">증명서 정보</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">증명서 이름</p>
                  <p className="font-medium">창업 아이디어 경진대회 우승 인증서</p>
                </div>
                <div>
                  <p className="text-gray-500">발급 기관</p>
                  <p className="font-medium">인하대학교 창업지원단</p>
                </div>
                <div>
                  <p className="text-gray-500">발급일</p>
                  <p className="font-medium">2024-07-15</p>
                </div>
                <div>
                  <p className="text-gray-500">수신자</p>
                  <p className="font-medium">김인하 (12201234)</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">블록체인 트랜잭션</p>
                  <p className="font-mono text-xs truncate">0x45d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">증명서 검증 방법</h4>
            <p className="text-sm text-blue-700 mb-2">ChainCert는 블록체인 기술을 활용하여 증명서의 진위를 검증합니다:</p>
            <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
              <li>증명서 발급 시 고유한 해시값이 블록체인에 기록됩니다</li>
              <li>해시 및 디지털 서명을 통해 발급 기관과 내용의 진위를 확인합니다</li>
              <li>블록체인의 분산 원장에 기록되어 위변조가 불가능합니다</li>
              <li>인증서를 통해 발급자, 수령자, 발급 날짜를 쉽게 확인할 수 있습니다</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSystem;