function toast({
    title='',
    message='',
    type='info',
    duration=3000})
{
    const main=document.getElementById('toast');
    if(main)
    {
        const toast=document.createElement('div');

        //AUTO REMOVE TOAST MESSAGE
        const autoRemoveToast=setTimeout(function(){
                main.removeChild(toast);
            }, duration);

            
        //REMOVE TOAST MESSAGE BY CLICK     
        toast.onclick=function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveToast);
            }
        }

        const icons={
            success: 'ti-check',
            info:'ti-info',
            warning:'ti-bolt'
        };
        const icon=icons[type];
        const delay=(duration/1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation=`slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML=`
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">
                        ${title}
                    </h3>
                    <p class="toast__msg">
                        ${message}
                    </p>
                </div>
                <div class="toast__close">
                    <i class="ti-close"></i>
                </div>
            `;
            main.appendChild(toast);
    }
}
function showSuccessToast(){
    toast({
        title:'Success',
        message:'Chúc mừng bạn đã bấm vào nút thành công nhận được phần quà trị giá 10 tỷ đồng',
        type:'success',
        duration:5000
    });
}
function showInfoToast(){
    toast({
        title:'Info',
        message:'Xin mời bạn đã bấm vào nút thành công nhận được phần quà trị giá 10 tỷ đồng',
        type:'info',
        duration:5000
    });
}