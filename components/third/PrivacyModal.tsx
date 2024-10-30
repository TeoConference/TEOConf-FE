import { useEffect } from 'react'

interface PrivacyModalProps {
  powerModal: () => void
}

const PrivacyModal = (props: PrivacyModalProps) => {
  const { powerModal } = props
  return (
    <ModalBackDrop onClick={powerModal}>
      <CreateModalContainer>
        <div className="text-mobile-h2 tablet:text-h3 mb-7">
          개인정보 처리방침
        </div>
        <div className="text-body3 tablet:text-body2 h-[60vh] bg-[#F8F8F8] w-full overflow-y-scroll p-[15px] break-keep">
          테오콘(이하 &quot;회사&quot;라 함)는 개인정보보호법을 준수하며, 관련
          법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을
          다하고 있습니다. 회사의 개인정보처리방침은 다음과 같은 내용을 담고
          있습니다.
          <br /> <br />
          [개인정보 처리방침]
          <br />
          <br /> 1.개인정보 처리방침 작성의 필요성
          <br /> 테오콘이 운영하는 웹사이트에서 개인정보를 수집하지 않더라도,
          이용자의 개인정보를 보호하고 관리하는 방식에 대한 설명을 제공함으로써,
          이용자의 신뢰를 높이고 법적인 책임을 다할 수 있습니다.
          <br />
          <br /> 2.수집하는 개인정보의 항목
          <br /> 테오콘은 웹사이트 이용 과정에서 이용자의 개인정보를 수집하지
          않습니다.
          <br />
          <br /> 3.개인정보의 수집목적
          <br /> 테오콘은 웹사이트 이용 과정에서 이용자의 개인정보를 수집하지
          않으므로, 수집목적을 명시하지 않습니다.
          <br />
          <br />
          4.개인정보의 보유 및 이용기간
          <br /> 테오콘은 웹사이트 이용 과정에서 이용자의 개인정보를 수집하지
          않으므로, 보유 및 이용기간을 명시하지 않습니다.
          <br />
          <br />
          5.개인정보의 제공
          <br /> 테오콘은 이용자의 개인정보를 수집하지 않으므로, 제공하지
          않습니다.
          <br />
          <br />
          6.개인정보의 처리위탁
          <br /> 테오콘은 이용자의 개인정보를 수집하지 않으므로, 처리위탁을 하지
          않습니다.
          <br />
          <br /> 7.정보주체의 권리, 의무 및 그 행사방법
          <br /> 이용자는 언제든지 테오콘에게 자신의 개인정보 열람, 정정, 삭제
          등의 요청을 할 수 있습니다. 이에 대한 문의 및 요청은 아래 연락처로
          하실 수 있습니다.
          <br />
          <br />
          8.개인정보 보호책임자
          <br /> 테오콘은 개인정보 보호책임자를 지정하지 않습니다.
          <br />
          <br />
          9.개인정보 처리방침 변경 시 공지의무
          <br /> 테오콘은 개인정보 처리방침 변경 시, 이를 웹사이트에
          게시함으로써 공지의무를 다합니다. <br />
          <br />
          [연락처]
          <br /> 회사명: 테오콘
          <br />
          이메일: help.teocon@gmail.com
        </div>
        <button
          className="bg-[#1A1A1A] rounded-[100px] w-40 h-14 mt-7"
          type="button"
          onClick={powerModal}
        >
          <span className="text-white text-body2">닫기</span>
        </button>
      </CreateModalContainer>
    </ModalBackDrop>
  )
}
export default PrivacyModal

interface ModalBackDropProps {
  children: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

/** onClick에는 Modal을 해제하는 함수 할당 **/
const ModalBackDrop = ({ children, onClick }: ModalBackDropProps) => {
  useEffect(() => {
    document.body.style.cssText = `
    overflow: hidden;
    width: 100%;`
    return () => {
      document.body.style.cssText = 'overflow: unset;'
    }
  }, [])

  return (
    <div
      className="fixed z-[99] top-0 left-0 bottom-0 right-0 bg-[#141617]/30 w-full h-full flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface ModalContainerProps {
  children: React.ReactNode
}

const CreateModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <>
      <div
        className="w-[85%] h-fit max-h-[85%] tablet:w-3/4 desktop:w-1/2 desktop:min-w-[800px] fixed top-16 flex-center flex-col px-5 tablet:px-20 py-7 overflow-auto bg-white border border-borderColor rounded-xl z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  )
}
