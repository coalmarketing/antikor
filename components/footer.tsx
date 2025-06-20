const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 border-t border-[#333]">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}, coalmarketing & Michal Špitálský
        </p>
      </div>
    </footer>
  );
};

export default Footer;
