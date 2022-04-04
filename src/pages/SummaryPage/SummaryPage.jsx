import React, { useState } from "react";

function SummaryPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <form>
        <label htmlFor="conform-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <input
          type="checkbox"
          checked={checked}
          // 클릭시 checked가 true면 false로, false면 true로 상태 변화해줌.
          onChange={(e) => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <br />
        {/* checked 상태 반대로 button 속성 지정 */}
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
}

export default SummaryPage;
