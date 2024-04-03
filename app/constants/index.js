import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HelpIcon from "@mui/icons-material/Help";
import DescriptionIcon from "@mui/icons-material/Description";
import LockIcon from "@mui/icons-material/Lock";

export const routes = [
  {
    label: "Home",
    route: "/",
    icon: <HomeIcon />,
  },
  {
    label: "Products",
    route: "/products",
    icon: <ShoppingBasketIcon />,
  },
  {
    label: "Product Details",
    route: "/products/:id",
    icon: <InfoIcon />,
  },
  {
    label: "Cart",
    route: "/cart",
    icon: <ShoppingCartIcon />,
  },
  {
    label: "Checkout",
    route: "/checkout",
    icon: <PaymentIcon />,
  },
  {
    label: "Order History",
    route: "/orders",
    icon: <HistoryIcon />,
  },
  {
    label: "Profile",
    route: "/profile",
    icon: <AccountCircleIcon />,
  },
  {
    label: "Wishlist",
    route: "/wishlist",
    icon: <FavoriteIcon />,
  },
  {
    label: "Categories",
    route: "/categories",
    icon: <CategoryIcon />,
  },
  {
    label: "Search",
    route: "/search",
    icon: <SearchIcon />,
  },
  {
    label: "About Us",
    route: "/about",
    icon: <InfoIcon />,
  },
  {
    label: "Contact Us",
    route: "/contact",
    icon: <ContactMailIcon />,
  },
  {
    label: "FAQs",
    route: "/faqs",
    icon: <HelpIcon />,
  },
  {
    label: "Terms & Conditions",
    route: "/terms",
    icon: <DescriptionIcon />,
  },
  {
    label: "Privacy Policy",
    route: "/privacy",
    icon: <LockIcon />,
  },
];
