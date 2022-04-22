export default function Navbar(){
    return (
    <nav className='py-10'>
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-2/12 flex items-center">
              <div className='w-40 h-10 bg-black rounded flex items-center justify-center text-white mr-10'>xyzuan.</div>
            </div>
            <div className='w-8/12'>
              <ul className='space-x-8 flex'>
                <li><a href="#">home.</a></li>
                <li><a href="#">about.</a></li>
                <li><a href="#">project.</a></li>
                <li><a href="#">experience.</a></li>
                <li><a href="#">blog.</a></li>
                <li><a href="#">contact.</a></li>
              </ul>
            </div>
            <div className='w-2/12'>
              <div className='w-40 h-10 bg-black rounded flex items-center justify-center text-white mr-10'>Dark Mode</div>
            </div>
          </div>
        </div>
    </nav>
    )
}