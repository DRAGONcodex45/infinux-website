const sidebarItems = document.querySelectorAll('.marketing-sidebar-item');
        const contentDivs = document.querySelectorAll('.text-content');

        sidebarItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.dataset.target;
                const targetDiv = document.getElementById(targetId);
                const titleElement = targetDiv.querySelector('.marketing-h5');
                const descriptionElement = targetDiv.querySelector('p');

                contentDivs.forEach(div => {
                    div.classList.add('hidden');
                });

                targetDiv.classList.remove('hidden');

                // Animate in title and description
                titleElement.style.transform = 'translateX(-50px)';
                titleElement.style.opacity = '0';
                descriptionElement.style.transform = 'translateX(-50px)';
                descriptionElement.style.opacity = '0';

                setTimeout(() => {
                    titleElement.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                    titleElement.style.transform = 'translateX(0)';
                    titleElement.style.opacity = '1';
                }, 100);

                setTimeout(() => {
                    descriptionElement.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                    descriptionElement.style.transform = 'translateX(0)';
                    descriptionElement.style.opacity = '1';
                }, 200);
            });
        });