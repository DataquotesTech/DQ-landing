export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-sans font-bold text-xl text-foreground mb-3 tracking-tight">
              Data<span className="text-primary">Quotes</span>
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              One integrated ecosystem for digital growth, technology, education, and early coding — built to scale businesses, careers, and futures.
            </p>
          </div>

          {/* Verticals */}
          <div>
            <p className="font-sans font-semibold text-sm text-foreground mb-4">Verticals</p>
            <div className="space-y-2.5">
              {["Digital Marketing", "Edutech", "IT Services", "K12 (juniors)"].map((v) => (
                <a
                  key={v}
                  href="#verticals"
                  className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {v}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-sans font-semibold text-sm text-foreground mb-4">Company</p>
            <div className="space-y-2.5">
              {["About", "Careers", "Blog"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans font-semibold text-sm text-foreground mb-4">Contact</p>
            <div className="space-y-2.5 font-sans text-sm text-muted-foreground">
              <p>hello@dataquotes.net</p>
              <p>+91 87901 34917</p>
              <p>3rd Floor, 14-40A, Vaikuntapuram Arch Rd, Dhanalakshmi Nagar, Vk Puram, Tirupati, Andhra Pradesh 517502</p>
              <a href="#contact" className="text-primary hover:underline font-medium block mt-3">
                Book a Call →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <p className="font-sans text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} DataQuotes. All rights reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            {["Privacy Policy", "Terms of Use"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
