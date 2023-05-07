

export default function SidePanel() {
  return (
    <>
      <div className="flex flex-col items-start w-64 h-screen bg-black">
        <div className="top w-64">
          <div className="bg-amber-300 w-full h-10">Button space</div>
          <div className="bg-amber-900 w-full h-40">Gpt</div>
          <div className="bg-amber-500 w-full h-20">About</div>
          <div className="bg-amber-600 w-full h-20">Setup</div>
          <div className="bg-amber-700 w-full h-20">Personalize</div>
          <div className="bg-amber-800 w-full h-20">support</div>
        </div>
        <div className="bottom w-64 h-screen relative ">
          <div className="bg-amber-700 w-full h-20 absolute bottom-0">Profile</div>
        </div>
      </div>
    </>
  );
}
