const Challenge = () => {
  return (
    <>
      <div className="md:container md:mx-auto">
        <div className="grid md:grid-cols-2 md:mx-9 lg:mx-56 md:py-10">
          <div>
            <h1 className="font-serif text-3xl font-bold pt-10 px-4">The creative crew</h1>
          </div>
          <div className="px-4 py-10">
            <h2 className="uppercase font-bold">Who we are</h2>
            <p>
              We are team of creatively diverse. driven. innovative individuals working in various locations from the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 px-4 justify-items-center md:mx-9 lg:mx-56">
          <div className="h-72 lg:h-96 md:h-80 grid">
            <div>
              <div className="flex">
                <div>
                  <img className="w-32 md:w-36 lg:w-48" src="./img/photo1.png" alt="img__profile" />
                </div>
                <p className="writing font-serif text-xs">Product owner</p>
              </div>
              <p className="font-bold text-lg py-3">Bill Mahoney</p>
            </div>
          </div>

          <div className="h-72 lg:h-96 md:h-80 grid items-end">
            <div>
              <div className="flex">
                <div>
                  <img className="w-32 md:w-36 lg:w-48" src="./img/photo2.png" alt="img__profile" />
                </div>
                <p className="writing font-serif text-xs">Product owner</p>
              </div>
              <p className="font-bold text-lg py-3">Bill Mahoney</p>
            </div>
          </div>
          
          <div className="h-72 lg:h-96 md:h-80 grid">
            <div>
              <div className="flex">
                <div>
                  <img className="w-32 md:w-36 lg:w-48" src="./img/photo3.png" alt="img__profile" />
                </div>
                <p className="writing font-serif text-xs">Product owner</p>
              </div>
              <p className="font-bold text-lg py-3">Bill Mahoney</p>
            </div>
          </div>
          
          <div className="h-72 lg:h-96 md:h-80 grid items-end md:items-start">
            <div>
              <div className="flex">
                <div>
                  <img className="w-32 md:w-36 lg:w-48" src="./img/photo4.png" alt="img__profile" />
                </div>
                <p className="writing font-serif text-xs">Product owner</p>
              </div>
              <p className="font-bold text-lg py-3">Bill Mahoney</p>
            </div>
          </div>
          
          <div className="h-72 lg:h-96 md:h-80 grid md:items-end">
            <div>
              <div className="flex">
                <div>
                  <img className="w-32 md:w-36 lg:w-48" src="./img/photo5.png" alt="img__profile" />
                </div>
                <p className="writing font-serif text-xs">Product owner</p>
              </div>
              <p className="font-bold text-lg py-3">Bill Mahoney</p>
            </div>
          </div>
          
          <div className="h-72 lg:h-96 md:h-80 grid items-end md:items-start">
            <div>
              <div className="flex">
                <div>
                  <img className="w-32 md:w-36 lg:w-48" src="./img/photo6.png" alt="img__profile" />
                </div>
                <p className="writing font-serif text-xs">Product owner</p>
              </div>
              <p className="font-bold text-lg py-3">Bill Mahoney</p>
            </div>
          </div>
          
          
        </div>

      </div>

      <div className="bg-slate-300 mt-10 p-5 w-full text-center">
        <p>created by <span className="font-bold underline	">username</span> - devChallenges.io</p>
      </div>
    </>
  )
}

export default Challenge