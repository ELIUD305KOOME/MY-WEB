import React from 'react';
import './AboutMe.css'; // Ensure you import the CSS file

const AboutMe = () => {


    return (
        <div id='about'  className="about-me-container">
            <div className='about-me'>
                <h1>About Me</h1>
                <p>I’m <span className='name'>Eliud Koome</span>, 21 years old,
                    a passionate full-stack software
                    engineer and an LVAS-trained <span className='lvas'>Medical biller</span>
                    , proficient in
                    charge entry,payment posting,
                    and various other aspects of
                    the medical billing process.</p>
            </div>
            <div className='education'>
                <h2>Education</h2>
                <p>High School Graduate</p>
                <p>Full-Stack Software Engineer <span className='school'>Moringa School</span>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBISERAWFRUVFhcQFhAWEhgWEhAVFRUYGBUWFRUYHSggGhomHRcYIzEjJSkrLjAuGB8zODMsNygtLisBCgoKDg0OGxAQGi0mICUtMC0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAgcEAwj/xABDEAACAgECAwUEBgcGBQUAAAABAgADEQQSBSExBgcTQVEiYXGxFDI0c4GRFSM1QlJyoXSCsrPB8CQzYsLRFkNTY6L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEBQL/xAAwEQEAAgICAAMGBQQDAQAAAAAAAQIDEQQhEjFBBSIyM1FxExQ0YYEjcpGhQlLhJP/aAAwDAQACEQMRAD8A7jAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAxmAzI3sMyRmAgICAgICAgICAgICAgICAgICAgICAgICAgVWzX6rV3PXpmFddZ2taRksfd+XSc6cmTPfWOdRDqRgw8fHF8vcz6NtPr9Vpr0q1TB0sO1LgMEHyB/wB+cmMubFkiuTyn1RfDgz45vhjUx5ws06Hq5epbQkgICAgICAgICAgICAgICAgICAgICAgICBgiBT+Ha4cPtuqvUhHc2JaBkHPr/ScvHk/L3mt46n1dfNi/N0rbHPcRrRrNX+kNRSlIJrrbxHtIwOXMAf785F7RyMkRj8oMeKeJhtbJPduohbxOp6bcj1bSQgICAgICAgICAgICAgICAgICAgYMeo83ENatFbWOeS/mfQCVZMsY6TaVmHFbLeKV85V9eOa918WvRjw+oy3tkeuMj5TH+Y5E9xTr/bofleNX3bZPe/0meC8WTVV71BBB2sh6qfSasOeMtdwx8njWwX8My9+ZfO/Rm28er4rRU22y1Vb0J5yq+elJ8Np0vpx8t48VK7h5u0W19HcwwR4ZYHr5dRKuVq2GZW8PxV5FY/dv2dQfRaOQHsKeXnynvjajHGvo8czvLaJ+qSPIfD+ku1pn7Qd/a3SI23xCcciVUlfzHX8MzJbm4az3LdT2fntEdJfSapLUDowZT5j5fGaa3i8brLHfHbHaYs+89vJAQEBAQEBAQEBAQEBAQEBAQMGESr/bWhm0pIGdrK5Hqo6/OYudEzj69HQ9nWrXN73r09el41pmqFgtUDAyCwBXl0I9Z7pyMXhi21WTi5ovNPDO9o3sgC1mquAIrscbMjHQtk/1H5SnhRM3tf0nyaPaGq1pSZ7iO1lM3dztzelNpu09VuqGsT22csCybt1Z+qFM5sTjraYyxuXXmmW9KTgnqPP7vtpK3Xhd24EArYyKeqoeYBnqItHFtt5tas82uvrCd7PfZKPu1+U1cf5VftDHy/n3+8vJ2wudNJYV88Kf5ScGeebMxinT37OrFs8bffhHD6V06KqKQVBJIBLkjmSfOMOGn4cV11LzyM+Wctp3qYlF9m1Fer1VVZ/VjDAeSt6D/flKOLHhzWpXyaeZPjw0vb4lpnQhzGZIQEBAQEBAQEBAQEBAQEBAQEDVhmROpO4U/X8H0/6QoTwgFdWZlBIBI3Ecs8ugnLyYMX5mK66l2cXLzflLW33E+axa3V06WvLeyowqqo6nyUATffJXFXtzMePJnvMR28/D+PV3P4ZR63xkI64LD3Tzi5MWt4Z81mbiWx08UamP2R/a1R42h5f+8B/+kmXnRq2PX/aGn2fM/h5YievClO0f2S/7tvlNPLj+hbX0ZeH8+kz9WeAHGkoP/wBa/Ke+Nr8Kv2hHL7z2nXq2bV6fUBqvER8gqyBgTjz6Tza+PLukkY8uLV9TCrazQ36a2rT1apwlxIUYH6vBGfn5YnPy48mO8Yq26l1MWfFmxzltj7r5/us/BOEJpkKqcsTlnPVjOjgwVxR05fJ5Ns9tyk5ezEJICAgICAgICAgICAgICAgICAgVviP7T033b/Jpgyfq6/Z0cX6O/wB3o7T6SxxVZWoY02C3YT9YAc/xlnLrfVbV9J7V8LLSk2rb/lGkfor312opuWvZXSWyxI3MxH1R7pRjtPIvFo8o2vy444mK2OZ3M6/w+vaz/naH79f8ST1zo97H/dCPZ3y839spTtJ9kv8Au2+U0cr5Vvsy8P51Puir1sPClFed3hL064yN2PwzM1t/lI8PnpqrNY5u7eW0XqrNI6addIo8bem3auHUfveIfT4ym04ZrWMUe9uP8b7aKRni17Zp92Yn/wA0lO0H27Q/Fv8Atl+frNRm4v6bKs4nQc1mAgICAgICAgICAgICAgICAgICAgVviP7T033b/Jpgyfq6/Z0sX6O/3WC0cj8D8ptt1WXOr5xKmdmOO6fT0slrkNvZsbSeRxOXxOVjx0nf1dnn8TLlybr31BxrjNGpu0YqbO25SeRHV0x1+EZ89clscRvzTxeNkxUy+L/rKydpPsl/3bfKbuV8m0/s5vD+fT7nZ/7JR92vykcbf4VfsjmfPvr6ojs/tGt13Qe0uOgxzbOJl4/hjkZN+mm3l+KeLh/lnjzA67Q4Pm3zE98md56aeOJGuLl2tInQc0gICAgICAgICAgICAgICAgICAgIFZ4pYF4lpixAHhvzJwP3pzs1ojlVmZ9HSwxM8S8R9U5ZrKsH9anQ/vD0+M12y0ms9+jDXHbfkguxNKNp2JUE+I3MgH0mXg0pOPem/wBp3t+LHfpCwDTp5Iox/wBI5Tb4Kx6OdNra83m47Uz6a5VBJKEADqTK+TE2x2j9lvFtFMtZmfKUDw/iWtqqSv6Ax2KFzuxnA+ExYs3IpSIino6Gbj8bJebfix3LxcG4aus1OqN6MjAq2wNgqWzkE+fQSrBhpny5PHGp69V/J5FuNhxxincd96T2l7LaaqxbFDblORlyRmbqcLFW0WiPL93Oye0M16zW09T+ycE1sTMBAQEBAQEBAQEBAQEBAQEBAQEDBgRnE+B0ahg1qkkDAwxHv8pRk49Mk7lpwcvLijVJeFuyOjwT4Z6fxt/5lVuJiiJldX2jyN6mY/xDXsKMaZvvG/piV+z4rGLUfWXv2rbeaN/SHt43xgafaqoXsfklY8/eZfm5Hg612zcfjfiz4pnVY80c3G9XQQ2q06isnBetslM+vMyj8xnxz/Ur00xxOPliYw296PqstbhgCDkEAg+oPSbqzFo3DnTGp0rvZ37br/5l+bTBxf1GT+HT5n6bD9pWWdFyyAgICAgICAgICAgICAgICAgICAgIGMQNbOh+Bnm3kmsdwr3Yf7M33jf6THwJ/p/zLo+1Z/qx/bD5ccfwNbTqHB8PYai2M7Cc8/6/0kZ7eDNF5g4sfi8a2Gs+827Qcaoah663W17BsVEO45PmcdMSOTyKzjmle5RxOJlrki941WPVNcHoNdFSN1VFB9xA5zVgrNccRP0ZOReL5bWjy2h+zv23X/zL82mTi/qMn8N3M/TYftKyzouWQEBAQEBAQEBAQEBAQEBAQEBAQEBAQNLeh+B+U838tvVfOFf7DfZm+8b/AEmPgfLn7y6HtT5sfaE9bSrgqyhgeoIyD+E2WrFo1Ln1tNZ3HUqx2O0te7UtsXK2lVOBlR5AegnO4OOu7T+7qe0sl5jHG+vCtQnT05EeSudnftuv/mX5tOfxY/8Aoy/w6nM/TYftKyzoOYQEBAQEBAQEBAQEBAQEBAQEBAQEBAQNLBkH3giRaNxMETqYn6Ivs3w5tNUa3IJLM/LOMHHrM/GxTjq18zkRnyeKPpEJeaWRDcB4a+nN24g+JYXGM8h78zLxsE4tzPrLXyuTGbwRHpGkuZpY/wBkRwrhj1ajU2swItKlQM5GM9fzmbDgmmS9vrpsz8mMmHHjj/jtMzUyEBAQEBAQEBAQEBAQEDBMBmAzCNmYSzAxmR2GZIQEBAQGZASQgMiEEJZEDGYGCwHUxqRnMDMDGYAERoZEBAQEBAQKv3m6l6uFat63KtsADKcMAzAHBHTkZ7x92h5t5S5V3RdsG02q+jX2MabyFUuxIqtPJcE9A2cH34PrL8uPrcKqWdO7yu1X6O0ZZCPHt/V0r6H95/goOfjgecox13Pay06hzbuQ4hc3E7Ea6xlbT2Oys7MGZbKsMQT19pufvl+WsRV4xzuXZ+PcXr0Wmt1Fv1a13EDqxzhVHvJIEzVjxTpbM6hws8R4z2gvdaXZK15+GljVaeoE+z4jDm7fn05AeerVaKdzY4p2a45wcfSRe2xSN1lN7ui/eVsACvxBHwkRaluiYmvbqHdn20/SdLCwBdRTtFgH1XDZ2uvoDg5HkR7xKcuPwz0947bh4u/DV2V8NTw3ZN+oStirFSy7LGKkjnjKj8ow92TfqHOezXYHiPENMmpp1KKjlwFe60NlHKHICkdVMutelZ1pXFbTG2tXGOKcA1gr1Fruow70m1rKrazyLV7ujcjg8jkDMma1vHSImay/QwbK5HpkTJ66XxLiXc/xK+zi+oD3OwdLWYM7MGK2DacE+WT+c0ZIiKxKqkzMrj33amyvhg8N2TdfWjFWKll2uSpI8sgcvdKsXm95OoVDui7ctVYNFqrCa7D+psdiTW5OPDJP7rHp6H4jF2XH1uHil/qnu/jWWJpdMqOyhrjuCsRu2oSAcdRmeMMbnt6yTqFw7vb3s4XondizGlcsxyx8uZPWV5Pil6p5Kf3s9vrNGw0mlYLaV323dTSpHshfLeRzyegx6y3Fj33Lze0+UKlw/u24xrK/HsvCM4DAX32m1s8/a5Hb8/cJ7/FpWXjwWlN93vD+O6LiCae4WHTe14hd/EpC7TtapyeR3Y5DHU5E8ZJpMbh6rE+rsUzwtVzvA4/+j9BdcD7ZHhVD1sfkPy5t/dllK+KXm06hwvsL2lv0WvotsssNdp2WbnYixGYobOZ5lWBOf+lhNN6VmJ0pi0w/S6nlMbQzAQEBAQKl3rfsfV/yr/jWWYvjh4v8MuG6Hsy93DLtbVktRcVsUZ/5WxTvGOhUnn7snymi1/e0pivW0nwKjV9oNfQmoYslNarZYBgLUnXn/G5+Hr5SLapHSYibPZ3GftZ/7Nb/AJtMjLO6PWONSvnflu/Rgx08avd8OeM/jiVYPiesvkx3Gir9Fnbjf49ni+u72duf7myM+9mPuF34yKvo9/jbfD8KzxC2Nuzad+4nyxmVV8+nu3k4h3Eb/wBI2Yzt+jtuz67025/rNWf4YU447XTv5/ZtP9qT/KulWD4ll/JQ+yXeZfw7R16ZNIlioXPiM7DPiWM5yAuORbEttji1t7VVyTEa089Wn1vaXX7nVVUBUsZeSaerJ5Ak5Zj7WPf7p6nWOCO5fonGFwPIY/KY97lo9HCO5f8AbFv3V3+Ys05fghRj81279f2Yn9or/wAFkrwfFCzJ5Oajsc13BaeIUKS6NcL0GSXrS1wtgHqoHP3c/KXzf3/DKqadbh8e0na9tfw7S03Em/T2EF//AJa/DKqxP8XLB/PzilNTKLW3Dt/dr+yND9yv+sy5PilfX4XG+P7f/Ur+P9X6bTuz02fq9ufdtx+E0Vj+n0qt8TsHeDqeJV6UNw1N1u8BsKruqYPNVbkeePI8pRTw+L3lttxHTl+i7wON0a2mnVv1srR6HorRttjAZyqgg4ORzl/4VJruFcXn1d4EyrocH77uPePrF0qMNmnHtHqPGfGc4/hXH5tNWCvW1GWe3k7wNfwq7R6OvRWln0w8DBrdd9RX2jlh13DP94ycdbRM7RbWunUe6jtB9M4dWGbNlH/D2Z6naPYY/FcfiDKMtdWXUncLpK3ogICAkCsd5elsu4Vq0qQuxQEIoyx2sCcAdeQMsxzq0beb/DKt9yPD7E0F4uqZRZcSFdSN67FU+yeeOonrNb3twikdLvwXgGl0QZdNQlQdt7bc+0fLJPP8Okrm0z5vWohyHuY4PqaeK3G2ixAlFlTMyFVDm2vABPI5wTy9Joy2r4NQrrHvOv8AaHg1eu01unt+rYuMjqh6qw94IBmes6lZaNw4ZXo+M9n73autmrPIuqGyi5R9UkLzVuvXBHwPPT7l1EeKr6cW7U8a4wv0ZNOwRsBq6amUWe57HOAvuyB6xFaU7Tu0+bpvdl2L/RlDG0htRbtNhHNawByrU+YBJyfM/ASnJfxSspXTx992itu4anhVs+zUJYwRSzKgSxS2BzIyw6esYZiLdmSOn27teCA8Fqo1VH1xdurdcMUe1yMg8xkEH8ZOS+rbhFa+65xquB8R4HxNW0dVlyEnwtqkrfUx51WkZCsOmT5gN7pdE1vXt5isxLv56GY/Vc4n3Q8K1FXFr2sosQIlqMzIQoZrFwMnkeh6TTltEx0pxxO1w77NLZbwwCutnK31uQqliF2uCcDnjJH5zxh6s95I3V6+6bRWVcIoS6soSbW2MMHa9rlcg9MggyMtt23BSNQ5j3m9hLNHqDdpanfT2kttRS30dz1Qgc9pJOPy8hm7Hk61Ku+Pvp2LsBpnq4Zo67FKutKhkIwVPoRM99eKdLaeSm97Hd/bq3+maRd1oULZTyBuC/VZSSBuA5Y8wB6SzHfXUvF677hVOH94nGdGgosoLlPZDXU2eKAOQyRjd06mWeCk9vMXtDXgvZ/ivF+IV6vU1GtQ9dj3MnhrsqZSErQ+0SQMDr6kxNq1rqCImZ3Lu2vtauqx0UsyozKg6sQCQBMsdyunycM7uOxp4pqNTqNfXZ4eSSCGray+x9zc+Rwozy6e17pqyZPDHuqaUm3xOg2d03CcHFTg+vjPy9/WUxmttZ4I0pXdVpdZoeMXaVqXKMHS1ypCDw9zV256HJOBj+P3HFmS0Wq8ViYl3CZoXEkICAgYxAAQEBiRIQG0SQCxMhIgMSQgMQGIDEjYYgAIDEkMQGJAxtk7RpnEjaQiSGI2EDG2BtAQEBAQIXtbaU0xIcoDbQjOGKkI19av7QII9kkZBEmB4uF6gC7UV0XNbSlQclrDaKbct7AtJLHKgEgsduB0zJedvJqeP21aTRWgoivQt1pb9a6KK0b2UaxWdRuOSCzdORzGjaR4nxR11JqF1NKpUl5a4E+NusZWVTuUKF2jJ587F5DzaNvPxnjltVlwV6lFARvBcE26s2eVZ3DGT7A5HLZHKNG5eniPF7a9QKAgLXeGaCQemf8AiN3vRRu/vARoeTU8evGtalVTYltNJRiqu62hSbAzWA8txwoU58NhnPING0jwzWX26rVKSgppdalUKTYzNTXYSWzgAbyMY5/hzjo2lLnYFAEJBJBYEewApOSPPpjl6yHpG9qNS9emZkYp7VavaOtVTWKttg96oWOfLGfKTCHg4JfWl99NZdlFYuDHVnUKQWIB9olkJ64zjAkyhqnFtSuj01tjVB9Q1Q8TafB0y2puBYFva5jA5jJdR75GhsePWV6ay9yjrRdstuQEJZSpHiWIMnG3cc8yP1bSdG2/Z3jd+os8OysI1aF7VwfYNhBoAJ8/D3Z94iY0mJT1rsCoCEgtgkEDYME7jnqMgDl6zyljWaZbUKNuwcZ22NW3I55OhDDp5GIRKscPstp4fTZSd1tzUKTdbZYo8SxUZsMxxgEnaMAkSUNu0PHbtMQqujGuoW2goFD5YgbSbARna3JQ5HLPlmYg2+3HuK6mp7jUawlGnTVFXQlrCz2gpuDDaMV9cHnGjb6cU4tbVq6qtyCptgPsh7C9jlACu9WVTywwVh1zjERA1RrE1GuvJNnhqFSkbs4FQfaBu25Jzz255j0jUDPAuK2W2hGtptDUjUb6QQKskAI2WOc5ODyzsPIRMaHmq4tq/oGmvc1eLe+mUAK3h1LqHRT+9lyNxPl6e+Ojcs6Hi2q8alLWqZbNRdo8IjK2aarbBZksevh4K45Z6mOk9rXPKSAgICBq6AjBGR6EZEDC1KBgAAegAAkdjR9MhwCikL0BUELjpgeUncjNmnRiCyhipyCVBKn1GekbkH06EhioJXoSBlfgfKNo02NYyDjmOh8xn0hLU6dCwYqCw6MQCw+B8o2NwgHz+MgbSRqVkD506ZEBCKFB5kKoAJ9TiTtGmzUKRtKgrjG3A249MekGgUqBtAG3ptwMY9MekJbKgGSB16nzOPWNjOIAiBr4S4AwMDoMDAx0wJA0s0yMQWRTjoSoJGfQmTtDc1qc5A58jy6j0Pujcpatp1JDFQSOjEDI+B8o2NvDHp168uvxhGmtenRc7VC5OTgAbj6nHUxJpsKlwBgYGMDHIY6YHlBo8Meg65zjzPn8Y2lvAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA//Z" alt="Moringa School Logo" className='school-logo' />
                </p>
                <p>Medical Biller <span className='biller'><i>GIGI SORIANO</i></span></p>
            </div>

            <div class="skills">
                <h2 className='skillnames'>Skills</h2>

                <div class="skill-category">
                    <h5>Software Engineering</h5>
                    <ul>
                        <li><i class="fab fa-python"></i> Python</li>
                        <li><i class="fas fa-code"></i> Flask</li>
                        <li><i class="fas fa-database"></i> SQL</li>
                        <li><i class="fas fa-database"></i> MySQL</li>
                        <li><i class="fab fa-html5"></i> HTML5</li>
                        <li><i class="fab fa-css3-alt"></i> CSS</li>
                        <li><i class="fab fa-react"></i> React</li>
                        <li><i class="fab fa-js-square"></i> JavaScript</li>
                        <li><i class="fab fa-git"></i> Git</li>
                        <li><i class="fas fa-users"></i> Git Collaboration</li>
                        <li><i class="fas fa-database"></i> Database Management</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <h5>Medical Billing</h5>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Insurance Verification</li>
                        <li><i class="fas fa-file-invoice"></i> Claim Creation</li>
                        <li><i class="fas fa-file-invoice-dollar"></i> Charge Entry</li>
                        <li><i class="fas fa-check"></i> Eligibility Checks</li>
                        <li><i class="fas fa-money-check-alt"></i> Payment Posting</li>
                    </ul>
                </div>
            </div>
            <div className='projects'>
                <h4>Projects</h4>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg" className="img-fluid rounded-start" alt="Project" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">e-commernce</h5>
                                {/* <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p> */}
                                <p className="card-text">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://www.webfx.com/wp-content/uploads/2023/09/032445_Free_online_portfolio-1536x693.png" className="img-fluid rounded-start" alt="Project" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">portfolio</h5>
                                {/* <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p> */}
                                <p className="card-text">
                                    <small className="text-body-secondary">Last updated 4 days ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AboutMe;
