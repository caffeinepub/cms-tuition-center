import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  Atom,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Globe,
  Languages,
  Leaf,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Star,
  Target,
  TestTube2,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

// ─── Fade-up animation variant ───────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Subjects", href: "#subjects" },
  { label: "Why Us", href: "#highlights" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SUBJECTS = [
  { name: "Mathematics", icon: BookOpen, color: "text-amber-700" },
  { name: "Science", icon: FlaskConical, color: "text-green-700" },
  { name: "English", icon: Languages, color: "text-blue-700" },
  { name: "Social Studies", icon: Globe, color: "text-indigo-700" },
  { name: "Physics", icon: Atom, color: "text-violet-700" },
  { name: "Chemistry", icon: TestTube2, color: "text-rose-700" },
  { name: "Biology", icon: Leaf, color: "text-emerald-700" },
  { name: "Computer Science", icon: Monitor, color: "text-cyan-700" },
];

const HIGHLIGHTS = [
  {
    icon: Star,
    title: "Experienced Teachers",
    desc: "Our faculty brings years of classroom expertise and a passion for making complex topics approachable and memorable.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    desc: "Every student receives focused attention. Our limited-enrollment batches keep learning personal and effective.",
  },
  {
    icon: Target,
    title: "Personalised Attention",
    desc: "Tailored study plans and regular progress tracking ensure each student develops at their own best pace.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "Hundreds of students from Pathanapuram have gone on to excel in board exams and competitive entrance tests.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "My daughter's confidence in Mathematics transformed completely after joining CMS. The teachers are patient and truly dedicated. She scored 98 in her board exams!",
    name: "Meena Krishnan",
    role: "Parent — Class 10 Student",
    initials: "MK",
  },
  {
    quote:
      "The small batch approach at CMS meant my son never felt lost. His Physics grades improved from C to A+ within two terms. Best decision we made.",
    name: "Rajesh Thomas",
    role: "Parent — Class 12 Student",
    initials: "RT",
  },
  {
    quote:
      "CMS Tuition Center is genuinely No.1 in Pathanapuram. I cleared my entrance exams with top scores, and I owe so much of that to the structured coaching here.",
    name: "Anjali Suresh",
    role: "Former Student — Engineering Aspirant",
    initials: "AS",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.link"
          className="flex items-center gap-2 group"
          onClick={() => handleNav("#home")}
        >
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            CMS
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground font-body tracking-wide border-l border-border pl-2 ml-1">
            Tuition Center
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground rounded-md hover:bg-muted transition-colors"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-border bg-background"
          >
            <ul className="container px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-sm font-body font-medium text-foreground flex items-center gap-2 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                  >
                    <ChevronRight size={14} className="text-primary" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const handleEnroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
    >
      {/* Decorative background circles */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[80px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} custom={0}>
          <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold tracking-widest uppercase text-primary border border-primary/30 bg-primary/8 px-3 py-1.5 rounded-full mb-8">
            <Star size={11} fill="currentColor" />
            No. 1 in Pathanapuram
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          custom={0.05}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-5"
        >
          CMS Tuition
          <br />
          <span className="text-primary italic">Center</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          variants={fadeUp}
          custom={0.1}
          className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed"
        >
          Shaping futures, one student at a time.
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          className="font-body text-sm text-muted-foreground mb-10"
        >
          Trusted by families across Pathanapuram, Kerala for academic
          excellence from Class 1 to 12.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Button
            size="lg"
            onClick={handleEnroll}
            data-ocid="hero.primary_button"
            className="font-body font-semibold px-8 h-12 text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 shadow-none transition-all duration-200"
          >
            Enroll Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-body font-medium px-8 h-12 text-sm border-border text-foreground hover:bg-muted transition-all duration-200"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          custom={0.25}
          className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { val: "500+", label: "Students" },
            { val: "15+", label: "Years" },
            { val: "98%", label: "Pass Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-foreground">
                {stat.val}
              </p>
              <p className="text-xs font-body text-muted-foreground mt-0.5 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom wave ornament */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
      />
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 px-6 section-divider"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4"
            >
              About Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6"
            >
              Where Every Student
              <br />
              <em className="text-primary not-italic">Finds Their Potential</em>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"
            >
              <p>
                CMS Tuition Center has been the most trusted learning
                institution in Pathanapuram, Kerala for over 15 years. We
                believe every child is capable of excellence — our role is to
                create the environment where that excellence can flourish.
              </p>
              <p>
                With a team of highly qualified and experienced faculty, we
                offer personalised coaching for students from Class 1 to Class
                12 across all major subjects. Our small-batch model ensures no
                student ever falls behind or gets left out.
              </p>
              <p>
                From building strong foundational skills in early classes to
                rigorous board exam preparation and competitive entrance
                coaching, CMS has consistently delivered outstanding results
                year after year.
              </p>
            </motion.div>
          </motion.div>

          {/* Feature cards side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                title: "Classes 1–12",
                desc: "Full curriculum coverage for all grades",
              },
              { title: "All Boards", desc: "CBSE, ICSE & State syllabus" },
              {
                title: "Expert Faculty",
                desc: "Qualified, dedicated teachers",
              },
              {
                title: "Flexible Batches",
                desc: "Morning & evening schedules",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i * 0.08}
                className="bg-card border border-border rounded-lg p-5 shadow-card"
              >
                <p className="font-display font-semibold text-foreground text-base mb-1">
                  {item.title}
                </p>
                <p className="text-xs font-body text-muted-foreground leading-snug">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  return (
    <section
      id="subjects"
      data-ocid="subjects.section"
      className="py-24 px-6 bg-muted/40 section-divider"
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 text-center"
          >
            Our Curriculum
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-3"
          >
            Subjects We Teach
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm font-body text-muted-foreground text-center max-w-md mx-auto mb-12"
          >
            A comprehensive range of subjects taught with clarity, depth, and
            real-world context.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {SUBJECTS.map((subject, i) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  key={subject.name}
                  variants={fadeUp}
                  custom={i * 0.05}
                  className="bg-card border border-border rounded-lg p-5 flex flex-col items-center gap-3 text-center hover:border-primary/40 hover:shadow-card transition-all duration-200 group"
                  data-ocid={`subjects.item.${i + 1}`}
                >
                  <div
                    className={`${subject.color} bg-muted/60 rounded-md p-2.5 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="font-body font-medium text-foreground text-sm leading-snug">
                    {subject.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section
      id="highlights"
      data-ocid="highlights.section"
      className="py-24 px-6 section-divider"
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 text-center"
          >
            Why CMS
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-3"
          >
            The CMS Difference
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm font-body text-muted-foreground text-center max-w-md mx-auto mb-12"
          >
            We don't just teach — we nurture, guide, and build confidence that
            lasts a lifetime.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  variants={fadeUp}
                  custom={i * 0.08}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-200 group"
                  data-ocid={`highlights.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/18 transition-colors duration-200">
                    <Icon
                      size={20}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    {h.title}
                  </h3>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-24 px-6 bg-muted/40 section-divider"
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 text-center"
          >
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-3"
          >
            Families Trust CMS
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm font-body text-muted-foreground text-center max-w-md mx-auto mb-12"
          >
            Real stories from students and parents who've experienced the CMS
            advantage firsthand.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4 hover:border-primary/30 transition-all duration-200"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((si) => (
                    <Star
                      key={si}
                      size={13}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="font-display text-xs font-bold text-primary">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitInquiry(
          name.trim(),
          phone.trim(),
          message.trim(),
          BigInt(Date.now()),
        );
      }
      setSubmitted(true);
      setName("");
      setPhone("");
      setMessage("");
      toast.success("Inquiry sent! We'll be in touch shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 px-6 section-divider"
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 text-center"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-3"
          >
            Enroll or Inquire
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm font-body text-muted-foreground text-center max-w-md mx-auto mb-12"
          >
            We&apos;d love to help your child succeed. Reach out and we&apos;ll
            get back to you promptly.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            {/* Contact info */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-4">
                  Visit Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-body text-sm text-foreground font-medium">
                        CMS Tuition Center
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        Pathanapuram, Kollam District
                        <br />
                        Kerala — 689695
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone
                      size={18}
                      className="text-primary shrink-0"
                      strokeWidth={1.5}
                    />
                    <a
                      href="tel:+919876543210"
                      className="font-body text-sm text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-display font-semibold text-foreground text-base mb-3">
                  Batch Timings
                </h3>
                <div className="space-y-2 font-body text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Morning Batch</span>
                    <span className="text-foreground font-medium">
                      7:00 AM – 10:00 AM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Evening Batch</span>
                    <span className="text-foreground font-medium">
                      4:00 PM – 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend Special</span>
                    <span className="text-foreground font-medium">
                      9:00 AM – 1:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} custom={0.1}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    data-ocid="contact.success_state"
                    className="bg-card border border-border rounded-lg p-8 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/12 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2
                        size={24}
                        className="text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-6">
                      Thank you for reaching out. Our team will contact you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                      className="font-body text-sm"
                    >
                      Send Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-lg p-6 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        data-ocid="contact.input"
                        className="font-body text-sm h-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                        required
                        autoComplete="name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        data-ocid="contact.phone_input"
                        className="font-body text-sm h-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                        required
                        autoComplete="tel"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your child's grade and subjects of interest…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        data-ocid="contact.textarea"
                        className="font-body text-sm bg-background border-border focus:border-primary focus:ring-primary/20 resize-none"
                        rows={4}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      data-ocid="contact.submit_button"
                      className="w-full h-10 font-body font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    >
                      {submitting ? "Sending…" : "Send Inquiry"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  return (
    <footer className="border-t border-border bg-card py-10 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-foreground text-lg">
              CMS Tuition Center
            </p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">
              No. 1 in Pathanapuram · Shaping futures, one student at a time.
            </p>
          </div>
          <div className="text-center">
            <p className="font-body text-xs text-muted-foreground">
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Subjects />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
