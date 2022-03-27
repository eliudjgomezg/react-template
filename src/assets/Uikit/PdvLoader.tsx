import useLoader from 'hooks/useLoader'

import Backdrop from '@mui/material/Backdrop'

type TUiLoader = {
  onClick?: () => void
}

const PdvLoader: React.FC<TUiLoader> = (props) => {
  const loader = useLoader()

  return (
    <div>
      <Backdrop open={loader.isOpen} onClick={props?.onClick} sx={{ color: '#fff', zIndex: 2000 }}>
        <Loader />
      </Backdrop>
    </div>
  )
}

export default PdvLoader

const Loader = () => {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' display='block' preserveAspectRatio='xMidYMid' viewBox='0 0 100 100'>
        <circle cx='84' cy='50' r='10' fill='#9BCB54'>
          <animate
            attributeName='r'
            begin='0s'
            calcMode='spline'
            dur='0.43859649122807015s'
            keySplines='0 0.5 0.5 1'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='10;0'
          ></animate>
          <animate
            attributeName='fill'
            begin='0s'
            calcMode='discrete'
            dur='1.7543859649122806s'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='#9BCB54;#d9828e;#20c3af;#f2a533;#9bcb54'
          ></animate>
        </circle>
        <circle cx='16' cy='50' r='10' fill='#9BCB54'>
          <animate
            attributeName='r'
            begin='0s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='0;0;10;10;10'
          ></animate>
          <animate
            attributeName='cx'
            begin='0s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='16;16;16;50;84'
          ></animate>
        </circle>
        <circle cx='50' cy='50' r='10' fill='#F2A533'>
          <animate
            attributeName='r'
            begin='-0.43859649122807015s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='0;0;10;10;10'
          ></animate>
          <animate
            attributeName='cx'
            begin='-0.43859649122807015s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='16;16;16;50;84'
          ></animate>
        </circle>
        <circle cx='84' cy='50' r='10' fill='#20C3AF'>
          <animate
            attributeName='r'
            begin='-0.8771929824561403s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='0;0;10;10;10'
          ></animate>
          <animate
            attributeName='cx'
            begin='-0.8771929824561403s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='16;16;16;50;84'
          ></animate>
        </circle>
        <circle cx='16' cy='50' r='10' fill='#D9828E'>
          <animate
            attributeName='r'
            begin='-1.3157894736842104s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='0;0;10;10;10'
          ></animate>
          <animate
            attributeName='cx'
            begin='-1.3157894736842104s'
            calcMode='spline'
            dur='1.7543859649122806s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            keyTimes='0;0.25;0.5;0.75;1'
            repeatCount='indefinite'
            values='16;16;16;50;84'
          ></animate>
        </circle>
      </svg>
    </>
  )
}
