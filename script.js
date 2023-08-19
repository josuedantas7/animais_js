function initTabNav () {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    const activeClass = 'ativo'
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass)
        tabMenu[0].classList.add(activeClass)

        function activeTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove(activeClass)
            })
            tabMenu.forEach((item) => {
                item.classList.remove(activeClass)
            })
            tabContent[index].classList.add(activeClass)
            tabMenu[index].classList.add(activeClass)
        }

        tabMenu.forEach((item,index) => {
            item.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

initTabNav();

function initFaq() {
    const allDT = document.querySelectorAll('.js-accordion dt')
    const allDD = document.querySelectorAll('.js-accordion dd')

    const activeClass = 'ativar'
    if (allDD.length && allDT.length) {
        allDD[0].classList.add(activeClass)
        allDT[0].classList.add(activeClass)

        function callback(index) {
            if (allDD[index].className === activeClass) {
                allDD[index].classList.remove(activeClass)
                allDT[index].classList.remove(activeClass)
            } else if (allDD[index].className !== activeClass){
                allDD[index].classList.add(activeClass)
                allDT[index].classList.add(activeClass)
            }
        }

        allDT.forEach((item,index) => {
            item.addEventListener('click', () => {
                callback(index)
            })
        })
    }
}

initFaq();


function initScrollSmooth (){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    if (linksInternos.length) {
        function scrollToSection(e) {
            e.preventDefault();
            const href = e.currentTarget.getAttribute('href')
            const section = document.querySelector(href)
            const topo = section.offsetTop
            // window.scrollTo({
            //     top: topo,
            //     behavior: 'smooth',
            // })
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    
        }
    
        linksInternos.forEach((item) => {
            item.addEventListener('click', scrollToSection)
        })
    }
}

initScrollSmooth();


function initAnimationScroll() {
    const sections = document.querySelectorAll('.js-scroll')

    const windowCalc = window.innerHeight * 0.6

    sections[0].classList.add('ativo')


    if (sections.length) {
        function animationScroll() {
            sections.forEach((item) => {
                const sectionTop = item.getBoundingClientRect().top - windowCalc 
                if (sectionTop < 0) {
                    item.classList.add('ativo')
                } else if (sectionTop > 0 && item.classList.contains('ativo')) {
                    item.classList.remove('ativo')
                }
            })
        }

        window.addEventListener('scroll', animationScroll)
    }
}

initAnimationScroll()