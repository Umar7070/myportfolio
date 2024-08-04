import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const socialMedia = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialMedia.map((ele, index) => {
        return (
          <Link key={index} href={ele.path} className={iconStyles}>
            {ele.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
