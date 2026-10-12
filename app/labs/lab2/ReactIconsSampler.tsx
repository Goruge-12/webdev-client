import { FaHome, FaUser } from "react-icons/fa";
import { BsBell, BsGear } from "react-icons/bs";
import { MdFavorite, MdSchool } from "react-icons/md";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons">
      <h2>React Icons</h2>
      <div className="wd-icons-row"><FaHome /><FaUser /><BsBell /><BsGear /></div>
      <h4>On my own</h4><div className="wd-icons-row wd-your-icons"><MdFavorite /><MdSchool /></div>
      <h4>With AI</h4><div id="wd-ai-icons" className="wd-icons-row wd-ai-icons"><AiOutlineStar /><AiOutlineHeart /></div>
    </div>
  );
}
