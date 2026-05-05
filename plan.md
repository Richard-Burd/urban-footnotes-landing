Ready for review
Select text to add comments on the plan
Navbar Audit & Improvement Plan



Issues Found
Critical
<button> nested inside <Link> (invalid HTML) — DesktopNavbar.js:50-56

<Link><button> generates <a><button>, which is invalid HTML (interactive element inside interactive element)
Fix: Remove the <button>, apply button styling directly to <Link>
No sticky/fixed navbar — Layout.js

Nav disappears when the user scrolls; there's no sticky or fixed positioning anywhere
Fix: Add sticky top-0 z-50 to the navbar wrapper in Layout.js
High (Visual / Branding)
No logo in either desktop or mobile navbar

The Logo component exists at components/Logo.js but is unused in nav. We need to use the ufn-no-text logo, which is circular instead of rectangular, it exists as an svg in public logo-home, but does not have a path setup yet. 
Desktop: empty space on left side of nav bar
Mobile: a large gap between the hamburger (left) and pinned items (right) — perfect spot for a logo
Fix: Import and render <Logo-No-Text> in both DesktopNavbar and MobileNavbar
Active state is a "color band" behind the button, not on it

The colored bgColor applies to the wrapper div (px-1 py-2) while the button itself stays bg-stone-700
This creates a subtle halo around the button rather than a clear active indicator
Fix: Apply activeColor directly to the button/link element (replacing bg-stone-700 when active), keeping the wrapper for padding only
Medium (Code Quality / DX)
isPathActive and activeColor duplicated verbatim — DesktopNavbar.js:14-27 and MobileNavbar.js:17-30

Identical logic in two files; a change to one must be manually mirrored
Fix: Export both from Navbar.js; import in both children
Chevron SVG duplicated 3× in DesktopNavbar.js — lines 63-74, 105-116, 128-139

Same <svg> path block copy-pasted; any style change requires 3 edits
Fix: Extract a ChevronIcon component inline in DesktopNavbar.js
roboto-font className applied on every leaf element

Applied to each <button>, <div>, <Link> inside the nav instead of once on <nav>
Fix: Move className="roboto-font" to the <nav> root element in both components
PINNED_TITLES uses magic strings — MobileNavbar.js:7

["Products", "Pricing"] must exactly match navItems[].title values — silent breakage if titles change
Fix: Add a pinned: true flag to the navItems objects in Navbar.js; filter on that
Low
Desktop dropdown uses <div> as clickable items — DesktopNavbar.js:144-152

<Link><div> is semantically the link content, not a button; fine for links but semantically cleaner as <Link className="...">text</Link>
Fix: Simplify to <Link className="...">{child.title}</Link> directly
aria-expanded, aria-haspopup missing on desktop dropdown triggers — DesktopNavbar.js:58-75

Mobile has these; desktop does not
Fix: Add aria-haspopup="true" and aria-expanded={isOpen} to the dropdown <button>
Files to Change
File	Changes
components/Navbar.js	Export isPathActive/activeColor helpers; add pinned flag to navItems data
components/DesktopNavbar.js	Add Logo; fix <Link><button>; extract ChevronIcon; move roboto-font to nav root; import shared utils; add ARIA attrs; clean up <div> clickables
components/MobileNavbar.js	Add Logo (centered); replace PINNED_TITLES magic strings with item.pinned flag; import shared utils; move roboto-font to nav root
components/Layout.js	Add sticky top-0 z-50 to the Navbar wrapper div
Implementation Steps
Navbar.js — Add pinned: true to Products and Pricing navItems; export isPathActive(currentPath) and activeColor(item, currentPath) as named exports (these become pure functions taking currentPath as a param)

DesktopNavbar.js:

Import isPathActive, activeColor from ./Navbar; remove local definitions
Extract const ChevronIcon = ({ className }) => <svg ...> at top of file
Replace <Link href={item.path}><button className="..."> with a styled <Link href={item.path} className="..."> (or <button onClick={() => router.push(item.path)}>)
Apply active color to the button/link directly; simplify wrapper <div> to just provide padding
Move roboto-font to <nav className="bg-neutral-950 px-2 text-white roboto-font">
Add a <Logo> to the left of the items flex row (wrapped in a <Link href="/">)
Add aria-expanded and aria-haspopup to dropdown buttons
MobileNavbar.js:

Import isPathActive, activeColor from ./Navbar; remove local definitions
Replace PINNED_TITLES.includes(item.title) with item.pinned
Add <Logo> in the center of the always-visible bar (between hamburger and pinned items), wrapped in <Link href="/">
Move roboto-font to <nav> root
Layout.js — Change <div className="bg-transparent"> to <div className="sticky top-0 z-50"> to make the entire nav bar sticky

Verification
npm run dev — open localhost:3000, verify:
Logo appears left on desktop, centered on mobile
Navbar stays pinned when scrolling down any page
Active route shows color directly on the button/link (not as a halo behind it)
Clicking a logo/Home button navigates to /
Products and Pricing dropdowns still work correctly
HTML validator: no <a> containing <button> errors
Hamburger menu opens and all non-pinned items appear correctly