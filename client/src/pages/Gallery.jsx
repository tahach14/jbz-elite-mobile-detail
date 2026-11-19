import React from 'react'
import SEO from '../components/SEO'
import SectionTitle from '../components/SectionTitle'
const photos=[
['Fresh exterior finish','https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1100&q=85'],
['Detail-minded care','https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1100&q=85'],
['A clean cabin','https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1100&q=85'],
['The final shine','https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&w=1100&q=85'],
['Ready for the road','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85'],
['Clean lines','https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85']]
export default function Gallery(){return <><SEO title="Car Detailing Gallery | Reliable Car Wash & Detailing Illinois" description="Explore vehicle care inspiration in the Reliable Car Wash & Detailing gallery. Contact us to discuss your car wash or detailing needs in Illinois." path="/gallery"/><section className="page-hero compact"><div className="page-hero-bg" style={{backgroundImage:"url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85)"}}/><div className="container page-hero-content"><span className="eyebrow">A LITTLE VISUAL INSPIRATION</span><h1>Clean looks<br/><em>good on you.</em></h1></div></section><section className="section-pad"><div className="container"><SectionTitle eyebrow="THE GALLERY" title="A closer look at clean." copy="A visual preview of the care and finishes we love. Replace these sample images with your own completed customer vehicles before launch."/><div className="gallery-grid">{photos.map(([name,img],i)=><figure key={name} className={i===0||i===5?'wide':''}><img src={img} alt={name}/><figcaption>{name}</figcaption></figure>)}</div></div></section></>}