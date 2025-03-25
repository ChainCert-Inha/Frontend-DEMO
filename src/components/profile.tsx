import React from 'react';
import { User, Mail, Phone, Calendar, Shield } from 'lucide-react';

interface UserInfo {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  enrollDate: string;
  publicKey: string;
  walletAddress: string;
}

interface UserProfileProps {
  userInfo: UserInfo;
}
const UserProfile = ({ userInfo }: UserProfileProps) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold mb-4">
                {userInfo.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold">{userInfo.name}</h2>
              <p className="text-gray-500">학과</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">학번</p>
                  <p>{userInfo.studentId}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">이메일</p>
                  <p>{userInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">연락처</p>
                  <p>{userInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">입학일</p>
                  <p>{userInfo.enrollDate}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-3">블록체인 정보</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">퍼블릭 키</p>
                  <p className="text-xs font-mono truncate">{userInfo.publicKey}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">지갑 주소</p>
                  <p className="text-xs font-mono truncate">{userInfo.walletAddress}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold mb-4">계정 보안</h3>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                <span>2단계 인증</span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">활성화됨</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              보안 설정 관리
            </button>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">내 디지털 역량 프로필</h3>
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-500 mb-2">기술 역량</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>프로그래밍</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>데이터 분석</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>AI/ML</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>블록체인</span>
                    <span>70%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-500 mb-2">소프트 스킬</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>리더십</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>팀워크</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>문제 해결</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>창의성</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">역량 점수는 어떻게 계산되나요?</h4>
              <p className="text-sm text-blue-700 mb-2">
                귀하의 역량 점수는 다음 요소들을 기반으로 블록체인에 기록된 증명서들을 분석하여 자동으로 계산됩니다:
              </p>
              <ul className="text-sm text-blue-700 list-disc pl-5">
                <li>취득한 자격증 및 수료증의 분야와 난이도</li>
                <li>참가한 대회 및 수상 경력</li>
                <li>증명서가 채용 담당자에게 검증된 빈도</li>
                <li>유사 역량을 가진 다른 사용자와의 비교 분석</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold mb-4">연동 계정</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <img src="/api/placeholder/24/24" alt="GitHub 로고" className="mr-3" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-xs text-gray-500">github.com/inha-kim</p>
                  </div>
                </div>
                <span className="text-green-600 text-sm">연결됨</span>
              </div>
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <img src="/api/placeholder/24/24" alt="LinkedIn 로고" className="mr-3" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-xs text-gray-500">linkedin.com/in/inha-kim</p>
                  </div>
                </div>
                <span className="text-green-600 text-sm">연결됨</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="/api/placeholder/24/24" alt="Coursera 로고" className="mr-3" />
                  <div>
                    <p className="font-medium">Coursera</p>
                    <p className="text-xs text-gray-500">미연결</p>
                  </div>
                </div>
                <button className="text-blue-600 text-sm hover:text-blue-800">연결하기</button>
              </div>
            </div>
            <button className="w-full bg-gray-100 text-gray-700 py-2 rounded mt-4 hover:bg-gray-200">
              계정 추가 연결
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;