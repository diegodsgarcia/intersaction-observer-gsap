import React, { useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

function Section({ title }) {
	const [sectionRef, inView, entry] = useInView({
		threshold: 0.5,
	})

	const timeAnimation = 3

	const fadeIn = useCallback((className) => {
		const element = entry?.target?.querySelectorAll(className)
		gsap.to(element, timeAnimation, {
			opacity: 1,
			y: 0,
			ease: 'power4.out',
			stagger: {
				amount: 0.5
			}
		})
	}, [entry])

	const fadeOut = useCallback((className) => {
		const element = entry?.target?.querySelectorAll(className)
		gsap.to(element, timeAnimation, {
			opacity: 0,
			y: 60,
			ease: 'power4.out',
		})
	}, [entry])

	useEffect(() => {
		if (inView) {
			fadeIn('.animate')
		} else {
			fadeOut('.animate')
		}
	}, [inView, fadeIn, fadeOut])

	return (
		<section ref={sectionRef}>
			<div className="container">
				<h2 className="animate">{title}</h2>
				<p className="animate">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo officia accusamus facilis vel illum et similique, praesentium possimus eum voluptates veniam sequi! Consectetur distinctio nulla esse maiores ab reprehenderit!
				</p>
				<p className="animate">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo officia accusamus facilis vel illum et similique, praesentium possimus eum voluptates veniam sequi! Consectetur distinctio nulla esse maiores ab reprehenderit!
				</p>
				<p className="animate">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo officia accusamus facilis vel illum et similique, praesentium possimus eum voluptates veniam sequi! Consectetur distinctio nulla esse maiores ab reprehenderit!
				</p>
				<p className="animate">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo officia accusamus facilis vel illum et similique, praesentium possimus eum voluptates veniam sequi! Consectetur distinctio nulla esse maiores ab reprehenderit!
				</p>
			</div>
		</section>
	)
}

export default Section