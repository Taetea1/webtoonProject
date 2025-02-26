## WebtoonPop Web Project

> **목차**
> 1. [프로젝트 기술 스택 및 개발 환경](#프로젝트-기술-스택-및-개발-환경)
> 2. [시연 영상](#시연-영상)
> 3. [소개](#소개)
> 4. [주요 기능](#주요-기능)
> 5. [사용된 라이브러리 및 API](#사용된-라이브러리-및-API)

</br>

## 💻프로젝트 기술 스택 및 개발 환경
### 기술 스택
<img 
src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" />

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8A2BE2?style=for-the-badge)


### 개발 환경
<img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC.svg?&style=for-the-badge&logo=visual%20studio%20code&logoColor=white" /> <img src="https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" />

<br>

## 시연 영상


<br>

## 소개

![Image](https://github.com/user-attachments/assets/2d58cd6e-d57a-4e7f-be5b-01cc3cbf4d1b)

WebtoonPop는 웹툰 팬들을 위한 굿즈 쇼핑몰입니다.
사용자는 웹툰 굿즈를 구경하며 마음에 드는 상품을 장바구니에 담을 수 있습니다.
Axios를 활용한 API 통신, MySQL을 활용한 데이터 관리, 그리고 MVC 패턴을 적용하여 효율적인 코드 구조를 만들었습니다.

<br>

## 주요 기능
### 관리자 페이지</br>
1-1.  **웹툰 등록 페이지**</br></br>
**:one:웹툰 등록**</br>
![Image](https://github.com/user-attachments/assets/73b7f4c1-7f31-4197-8af3-1d1146e31d46)
- 실시간으로 입력되었는지 확인하여 등록 버튼 활성화
- 등록시 DB에 저장되어 메인페이지에 반영
<br></br>

**:two:웹툰 삭제**</br>
![Image](https://github.com/user-attachments/assets/f60acdc8-3d84-4f30-bfa9-840ac3423798)
- 삭제 버튼 클릭시 해당 웹툰이 DB에서 삭제되어 반영
<br></br>

**:three:웹툰 제목 중복 확인**</br>
![Image](https://github.com/user-attachments/assets/815dd5af-b7eb-40a8-ae66-28fa9dd8ad24)
- 중복된 제목인지 확인하여 중복일경우 다시 입력하도록 alert창으로 알림
<br></br>

**:four:웹툰 카테고리 추가**</br>
![Image](https://github.com/user-attachments/assets/f880a4b2-9c9c-466b-be2a-3f883a2cbb1f)
- 웹툰 추가시 해당 웹툰이 카테고리로 추가
- 웹툰마다 다른 아이템들을 담음
<br></br>

</br>

1-2.  **웹툰 수정 페이지**</br></br>
![Image](https://github.com/user-attachments/assets/92ef324f-cf9b-4d97-8a52-859e3e51457d)
- 수정 버튼 클릭시 수정 페이지로 이동하여 수정 진행
- DB가 수정되어 화면에 반영
</br></br>

2-1.  **아이템 등록 페이지**</br></br>
**:one:아이템 등록**</br>
![Image](https://github.com/user-attachments/assets/8abd3ae8-dcb3-4bdd-9a04-407823a1c2f4)
- 아이템을 등록하면 선택한 타입의 웹툰에 추가
</br></br>

**:two:아이템 삭제**</br>
![Image](https://github.com/user-attachments/assets/4f006518-1ab1-4934-b532-4f13c5247ec5)
- 삭제 버튼 클릭시 해당 DB에서 해당 아이템 삭제
</br></br>

**:three:아이템 입력 조건 확인**</br>
![Image](https://github.com/user-attachments/assets/1e1a3346-75f1-4d06-9a23-01991d2d7c8e)
- 입력 조건에 맞지 않은 상태에서 등록 버튼 클릭시 안내 메시지
- 실시간 검사를 통해 입력을 확인하여 메시지 삭제
- 조건 만족시 등록
</br></br>

2-2.  **아이템 수정 페이지**</br></br>
![Image](https://github.com/user-attachments/assets/3d5f2c37-fe4e-4ef0-b059-463f9700360d)
- 수정 클릭시 해당 아이템의 정보를 그대로 수정페이지에 생성
- 관리자가 수정한 내용 반영
</br></br>
</br>

### 사용자 페이지</br>
1. **메인 페이지**</br></br>
![Image](https://github.com/user-attachments/assets/ef373e70-6514-4a2e-8b1c-bbfec1e4d57d)
- 웹툰 등록페이지에서 등록한 웹툰들이 카테고리 개념으로 생성
</br></br>

</br>

2. **웹툰 굿즈 페이지**</br></br>
![Image](https://github.com/user-attachments/assets/0c79129d-3092-447d-a177-b2cd6777eafb)
- 웹툰 클릭시 해당 웹툰에 해당하는 아이템 페이지로 이동
</br></br>

</br>

3. **웹툰 굿즈 상세페이지**</br></br>
![Image](https://github.com/user-attachments/assets/e97f05de-3de5-443b-abc3-eae2771bea05)
- 아이템 클릭시 해당 아이템의 상세페이지로 이동
- 수량 변경시 총 상품 금액을 사용자에게 보여줌
</br></br>

**:one:새로운 아이템 개수를 정해서 장바구니에 추가**</br>
![Image](https://github.com/user-attachments/assets/b9188b50-ca8c-4ec7-89a1-5823010d5c20)
- 장바구니에 없는 새로운 아이템 추가시 사용자가 선택한 개수만큼 추가
- 장바구니 아이콘의 count도 하나 증가
</br></br>

**:two:새로운 아이템 한개만 장바구니에 추가**</br>
![Image](https://github.com/user-attachments/assets/529fefa3-65eb-4285-b9c2-2aff419a45cb)
- 장바구니에 없는 새로운 아이템을 개수 변경없이 추가하면 1개가 장바구니에 추가
- 장바구니 아이콘의 count도 하나 증가
</br></br>

**:three:장바구니에 있던 아이템을 장바구니에 추가**</br>
![Image](https://github.com/user-attachments/assets/3cf88cff-9aaa-4124-804b-4970f0e9edb0)
- 장바구니에 있던 아이템 추가시 원래있던 개수에서 선택한 개수를 더하여 반영
- 원래있었던 아이템은 장바구니 아이콘의 count를 증가시키지 않음
</br></br>

</br>

4. **장바구니 페이지**</br></br>
**:one:장바구니 삭제**</br>
![Image](https://github.com/user-attachments/assets/090b4dc4-14da-4037-895c-eca13971cf0c)
- X 버튼 클릭시 해당 아이템을 장바구니에서 삭제
- 전체 삭제 버튼 클릭시 모든 아이템 삭제

</br></br>

**:two:장바구니 이동**</br>
![Image](https://github.com/user-attachments/assets/bfbf3103-585a-4bef-a107-a1dd96b2d81c)
- 장바구니 아이콘 클릭시 장바구니로 이동
- 장바구니에서 아이템의 사진 클릭시 해당 아이템의 상세페이지로 이동
</br></br>

**:three:장바구니 주문정보 고정**</br>
![Image](https://github.com/user-attachments/assets/e4cdd275-4877-4de2-9896-5284e03d894d)
- 스크롤시 주문 정보 박스는 고정
- 삭제시 장바구니 아이콘의 count와 주문 정보에 반영

</br></br>

**:four:아이템 개수 조정**</br>
![Image](https://github.com/user-attachments/assets/a4d1857d-2021-445a-8a48-fe449a22aaa1)
- 장바구니의 아이템 개수 조정시 DB에 반영하여 수량과 가격에 반영
- 수량은 1보다 작아질 수 없도록 1이되면 - 버튼 비활성화
</br></br>

</br>

5. **반응형**</br></br>
**:one:메인 페이지 반응형**</br>
![Image](https://github.com/user-attachments/assets/198201cd-fda1-4d93-8d28-ff9e94ffc9c5)</br></br>

**:two:웹툰 굿즈 페이지 반응형**</br>
![Image](https://github.com/user-attachments/assets/6eaabe2e-0043-44a1-ba85-87777b4de271)</br></br>

**:three:웹툰 굿즈 상세페이지 반응형**</br>
![Image](https://github.com/user-attachments/assets/9c152fec-8c10-4947-84ad-1c6fad47b1c5)</br></br>

**:four:장바구니 페이지 반응형**</br>
![Image](https://github.com/user-attachments/assets/907e5942-e438-4c16-9a4e-c2aeb538a693)</br></br>

</br>

## 사용된 라이브러리 및 API
### 라이브러리
- [SweetAlert2](https://sweetalert2.github.io/)
  - 모던한 디자인의 알림창을 제공하는 JavaScript 라이브러리
- [Toast UI](https://ui.toast.com/)
  - NHN Cloud에서 개발한 오픈 소스 라이브러리로, 마크다운과 위지윅 방식 모두를 지원하는 무료 에디터

### API
- [Axios](https://axios-http.com/kr/docs/intro)
  - node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트 




