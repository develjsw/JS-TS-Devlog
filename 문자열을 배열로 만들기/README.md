### 문자열을 배열로 만드는 법

- [방법 1] split(기준) 사용
   - 문자열을 기준으로 분리하여 배열 생성
   - 문자열을 문자 단위로 쪼개려면 빈 문자열 '' 기준으로 split
    ```ts
    const str = '문자열문자열만들기';
    const strArr = str.split(''); // ['문', '자', '열', '문', '자', '열', '만', '들', '기']
    const uniqueStrArr = [...new Set(strArr)]; // ['문', '자', '열', '만', '들', '기']
    ```

- [방법 2] Array.from(문자열) 사용
   - 문자열을 이터러블로 보고 문자 단위로 배열 생성
    ```ts
    const str = '문자열문자열만들기';
    const strArr = Array.from(str); // ['문', '자', '열', '문', '자', '열', '만', '들', '기']
    const uniqueStrArr = [...new Set(strArr)]; // ['문', '자', '열', '만', '들', '기']
    ```

- [방법 3] 전개연산자(...) 사용
   - 전개 연산자는 이터러블을 하나씩 펼치는 연산자
   - 문자열은 이터러블이므로 문자 단위로 분해됨
   - 내부적으로 Symbol.iterator를 호출하여 각 문자 추출
    ```ts
    const str = '문자열문자열만들기';
    const strArr = [...str]; // ['문', '자', '열', '문', '자', '열', '만', '들', '기']
    const uniqueStrArr = [...new Set(strArr)]; // ['문', '자', '열', '만', '들', '기']
    ```