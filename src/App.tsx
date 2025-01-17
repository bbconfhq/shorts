import { useLayoutEffect } from 'react'

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {

  useLayoutEffect(() => {
      const stars = ['✦', '✧', '⋆', '✶', '★', '*'];
      const starField = document.createElement('div');
      starField.className = 'star-background';

      for (let i = 0; i < 50; i++) {
        const star = document.createElement('span');
        star.className = `twinkle star-layer-${random(1, 3)}`;
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        star.style.left = `${random(0, 100)}%`;
        star.style.top = `${random(0, 100)}%`;
        starField.appendChild(star);
      }

      document.body.appendChild(starField);
  }, []);

  return (
    <>
      <div className={'container'}>
        <h1 className={'title'}>
          <span className={'divider'}>./</span>BBConf<span className={'divider'}>/</span>shorts
        </h1>

        <a href={'https://forms.gle/VRYXGNoxZt4vncpE7'} className={'apply-link'}>발표 신청</a>
      </div>
      <footer>
        <a href={'https://open.kakao.com/o/gDzaohI'}>헛소리하면 뒤진다</a>
      </footer>
    </>
  )
}

export default App
