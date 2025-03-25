import React from 'react';
import { Building, Calendar } from 'lucide-react';

interface VerificationHistoryProps {
  verificationHistory: {
    id: number;
    cert: string;
    verifier: string;
    date: string;
    purpose: string;
    status: string;
  }[];
}

const VerificationHistory = ({ verificationHistory }: VerificationHistoryProps) => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">인증 활동 내역</h2>
          <p className="text-sm text-gray-500 mt-1">내 증명서가 검증된 이력을 확인합니다</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-3 text-left">증명서</th>
                <th className="px-6 py-3 text-left">검증 기관</th>
                <th className="px-6 py-3 text-left">목적</th>
                <th className="px-6 py-3 text-left">검증 일자</th>
                <th className="px-6 py-3 text-left">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {verificationHistory.map(history => (
                <tr key={history.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-600">
                      {history.cert}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center">
                      <Building size={14} className="mr-1 text-gray-400" />
                      {history.verifier}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{history.purpose}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-gray-400" />
                      {history.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {history.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">검증 분석</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-2">총 검증 횟수</div>
              <div className="text-2xl font-bold">{verificationHistory.length}회</div>
              <div className="text-xs text-green-600 mt-2">지난달 대비 3회 증가</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-2">가장 많이 검증된 증명서</div>
              <div className="text-md font-semibold">블록체인 해커톤 참가 인증서</div>
              <div className="text-xs text-blue-600 mt-2">총 3회 검증됨</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-2">주요 검증 목적</div>
              <div className="text-md font-semibold">취업 지원</div>
              <div className="text-xs text-blue-600 mt-2">전체의 75%</div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-blue-800 font-semibold mb-2">검증 활동 통계</h3>
            <p className="text-sm text-blue-700 mb-4">귀하의 증명서는 지난 3개월간 7개 기업/기관에서 총 8회 검증되었습니다.</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-blue-700 font-medium">주요 검증 기관 유형</p>
                <ul className="list-disc pl-5 mt-1 text-blue-600">
                  <li>IT 기업 (4회)</li>
                  <li>교육기관 (2회)</li>
                  <li>금융기관 (2회)</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-700 font-medium">기업 채용담당자 관심도</p>
                <div className="mt-2">
                  <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-3/4"></div>
                  </div>
                  <div className="text-right text-blue-700 mt-1">75%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationHistory;