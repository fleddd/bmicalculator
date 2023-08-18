import {GiWeightScale} from 'react-icons/gi'
function Header() {
  return (
    <header className="flex items-center justify-center gap-6 py-5 text-light bg-primary">
          <div className='w-100'>
            <GiWeightScale size={100} color={'#e5f1e3'}/>
          </div>
          <div>
              <h1 className="text-3xl font-semibold">BMI Calculator</h1>
          </div>
    </header>

  );
}

export default Header;