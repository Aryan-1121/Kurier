
import { MdPersonSearch } from "react-icons/md";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type='text' placeholder='Search…' className='input input-bordered input-ghost input-warning rounded-full' />
      <button type='submit' className='btn btn-circle bg-yellow-700 text-white'>
        {/* <IoSearchSharp className='w-6 h-6 outline-none' /> */}
        <MdPersonSearch className="w-6 h-6 outline-none"/>
      </button>
    </form>
  );
};
export default SearchInput;