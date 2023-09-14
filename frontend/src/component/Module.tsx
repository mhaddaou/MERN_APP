
interface ModalType{
  isOpen : boolean;
  message : string;
  closeModal : () => void;
}

const ModalComponent = ({isOpen, closeModal, message} : ModalType) => {
  if (!isOpen)
    return null;
  return (
    <div>
        <div className='fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50 '>
          <div className='  bg-indigo-900 absolute lg:right-20 top-[20%]   rounded-lg p-4 outline outline-offset-2  outline-blue-950 shadow-lg animate-fade-in shadow-blue-700 divide-y   divide-blue-950'>

          <div className='flex justify-end    pb-4'>
            <button onClick={() => closeModal()} className='text-gray-400 transition-all duration-300  hover:text-slate-300'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
          </div>
          <div className="flex items-center justify-center w-full h-[70%] text-slate-300 text-xl font-serif p-10">{message}</div>
         
          </div>
        </div>
    </div>
  );
};

export default ModalComponent;
