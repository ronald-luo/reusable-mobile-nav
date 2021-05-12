        var card = document.getElementById('activator')
        var timeline = gsap.timeline({defaults: {ease: "power2.inOut"}})

        var toggle = false;

        timeline.to('.activator', {
            background: '#805ad5',
            'borderRadius': '5em 0 0 5em'
        })
        timeline.to('nav', {
            'clipPath': 'ellipse(100% 100% at 50% 50%)'
        })
        timeline.to('nav img', {
            opacity: 1,
            transform: 'translateX(0)',
            stagger: 0.25
        })
        timeline.pause()

        card.addEventListener('click', () => {
            toggle = !toggle;
            (toggle ? play() : reverse() )
        })

        function play() {
            timeline.play()
            activator.src = 'https://s2.svgbox.net/hero-outline.svg?ic=x&color=ffffff'
        }

        function reverse () {
            timeline.reverse()
            activator.src = 'https://s2.svgbox.net/hero-outline.svg?ic=menu-alt-1&color=ffffff'
        }