var $= document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const audioItem=$('.song-audio');
const propress = $('.croll-music');
const  nextItemRight = $('.next-right');
const  nextItemLeft = $('.next-left');
const  _this = this;
const btnRandom = $('.song-radom ');
const btnRepeat = $('.song-repeat');
const musicPlaying=$('.btn');
const playlist = $('.list');
const PLAYER_STORAGE_KEY   = 'Et.Dev';
const showingup= $('.nar-plus');
const hiddenItem =$('.close-item');
const music= {
    
    
    currentIndex:0,
   songs :[
    {
        name:'Đồi hoa mặt trời',
        singer:'Hoàng Yến ChiBi',
       img:'https://tse2.mm.bing.net/th?id=OIP.YrMAmVnlXUi-Um5DO3lIkwHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/doi_hoa_mat_troi_hoang_yen_chibi_lyric_video_mv_hd_-2373794839188844135.mp3'
    },
    {
        name:'Ái Nộ',
        singer:'Masew x Khoi Vu',
       img:'https://tse3.mm.bing.net/th?id=OIP.vEG5W4QakDLow-ejyMP7AwHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/ai_no_masew_x_khoi_vu_6165765355883939936.mp3'
    },

    {
        name:'Binh Yên Những Phút Giây',
        singer:'Sơn Tùng MTP',
       img:'https://tse1.mm.bing.net/th?id=OIP.9XfOyLPT7-V2m9gvf6nsvgHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/binh_yen_nhung_phut_giay_official_music_video_son_tung_m_tp_5581947948321162328.mp3'
    },
    {
        name:'Chạnh lòng thương cô',
        singer:'Huy Vạc',
       img:'https://tse1.mm.bing.net/th?id=OIP.OB5sc8UdFYhIJZE8BWvuVAHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/chanh_long_thuong_co_4_lofi_ver_huy_vac_x_wm_than_em_nhu_ca_trong_lo_het_phuong_vung_vay_-108535669758935078.mp3'
    },
    {
        name:'Cố giang tình',
        singer:'Phát Hồ',
       img:'https://tse1.mm.bing.net/th?id=OIP.ZJ2GpS3-FjZAF4Wqx6K6KgHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/co_giang_ti_nh_phat_ho_x_jokes_bii_ft_dinhlong_official_music_video_8345581245563698216.mp3'
    },

    {
        name:'Em khác gì hoa',
        singer:'Lil Zpoet',
       img:'https://tse3.mm.bing.net/th?id=OIP.t2VdS3_h1vVIvs3LAsxEFQHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/em_khac_gi_hoa_lil_zpoet_lyrics_video_-7763158467905937508.mp3'
    },
    {
        name:'Em là kẻ đáng thương',
        singer:'Phát Huy T4',
       img:'https://tse2.mm.bing.net/th?id=OIP.ILJsipwMRQoOdt9MRzlUGwAAAA&pid=Api&P=0&h=180',
        music:'./aasset/music/em_la_ke_dang_thuong_phat_huy_t4_official_mv_6469114501008729945.mp3'
    },
    {
        name:'Hai chữ đã từng',
        singer:'Như Việt',
       img:'https://tse2.mm.bing.net/th?id=OIP.ntPi_ZfKdB1DL3ej5l4PYgAAAA&pid=Api&P=0&h=180',
        music:'./aasset/music/hai_chu_da_tung_nhu_viet_official_music_video_-7152140887297435273.mp3'
    },
    {
        name:'Vô tình',
        singer:'Xesi',
       img:'https://tse4.mm.bing.net/th?id=OIP.5TxiVmkEy7S2i9XvUIIuhwHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/hoaprox_x_xesi_vo_tinh_official_lyric_video_3421385390934354762.mp3'
    },
    {
        name:'Thuyền xa bến xưa',
        singer:'Phát Huy T4',
       img:'https://tse3.mm.bing.net/th?id=OIP.Ppk4-mRhhPt8tcZIEi7RzAHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/thuyen_xa_ben_xua_new_version_phat_huy_t4_cuoc_tinh_tan_phai_em_theo_tinh_ai_-8264812222182042240.mp3'
    },

    {
        name:'Anh từng cố gắng',
        singer:'Nhật Phong',
       img:'https://tse4.mm.bing.net/th?id=OIP.8amAHR0n5sQLZzwDv1nRiAHaFj&pid=Api&P=0&h=180',
        music:'./aasset/music/nhat_phong_anh_tung_co_gang_official_mv_-5067046736631455838.mp3'
    },
    {
        name:'Sợ phải kết thúc',
        singer:'Nhật Phong',
       img:'https://tse3.mm.bing.net/th?id=OIP.okLzY7PGMR8d-4PKvbiMjQHaE7&pid=Api&P=0&h=180',
        music:'./aasset/music/nhat_phong_so_phai_ket_thuc_official_music_video_8788903443103483054.mp3'
    },

    {
        name:'Nơi này có anh',
        singer:'Sơn Tùng MTP',
       img:'https://tse3.mm.bing.net/th?id=OIP.CLFF6EVXOWMtgm8R4cqQkAHaD5&pid=Api&P=0&h=180',
        music:'./aasset/music/noi_nay_co_anh_official_music_video_son_tung_m_tp_389533849233227181.mp3'
    },
    {
        name:'Chạnh lòng thương cô 1 2 4',
        singer:'Huy Vạc',
       img:'https://tse2.mm.bing.net/th?id=OIP.Ti85Vu_hpkBz8mD7VPpFDwHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/playlist_speed_up_chanh_long_thuong_co_1_2_4_nhac_speed_tiktok_nhung_ban_nhac_cute_yeu_doi_7861628411812185801.mp3'
    },
    {
        name:'Tấm lòng son',
        singer:'H kray',
       img:'https://tse3.mm.bing.net/th?id=OIP.y15-FK5fMDsFkfO3en3eggHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/tam_long_son_h_kray_huynh_chuong_x_pro_mus_2647890359963563510.mp3'
    },
    {
        name:'Thay tôi yêu cô ấy',
        singer:'Thanh Hưng',
       img:'https://tse3.mm.bing.net/th?id=OIP.lC9tLuckWdygJLTCNCagDAHaD4&pid=Api&P=0&h=180',
        music:'./aasset/music/thay_toi_yeu_co_ay_dnstd_thanh_hung_official_lyrics_video_-7543615978435639505.mp3'
    },
    {
        name:'Thê lương',
        singer:'Phúc Chinh',
       img:'https://tse4.mm.bing.net/th?id=OIP.3qV6RXWIxHNVeXBFzMDpigHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/the_luong_phuc_chinh_official_lyric_video_-6240436272193597524.mp3'
    },
  

    {
        name:'Túy Âm',
        singer:'Xesi',
       img:'https://tse3.mm.bing.net/th?id=OIP.AzK-zBR5FVeKbBFLnh-b6gHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/tuy_am_xesi_x_masew_x_nhatnguyen_5859691511169296223.mp3'
    },
    {
        name:'Yêu là phải thương',
        singer:'Võ Kiều Vân',
       img:'https://tse1.mm.bing.net/th?id=OIP.TWkJpUu1m6v7oDAr1lq1NAHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/yeu_la_phai_thuong_vo_kieu_van_officical_mv_-857238412912169622.mp3'
    },
    {
        name:'Ngày mai em đi mất',
        singer:'Khải Đăng ',
       img:'https://tse4.mm.bing.net/th?id=OIP.0vEJJNVRCSzjRqOkMLUqeQAAAA&pid=Api&P=0&h=180',
        music:'./aasset/music/ngay_mai_em_di_mat_khai_dang_ft_dat_g_official_mv_-2560995945263630459.mp3'
    },
    {
        name:'Người lạ thoáng qua',
        singer:'Đinh tùng huy',
       img:'https://tse3.mm.bing.net/th?id=OIP.JWF3Fv-UaSt_swygbcJ9PgHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/nguoi_la_thoang_qua_dinh_tung_huy_official_mv_lyrics_3298852405696806454.mp3'
    },

    {
        name:'Chắc vì mình chưa tốt',
        singer:'Thanh Hưng',
       img:'https://tse2.mm.bing.net/th?id=OIP.GqYLG_MgWt2nUNcp9NmeQgHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/chac_vi_minh_chua_tot_thanh_hung_lyrics_video_-3389565381515175847.mp3'
    },
    {
        name:'Em gái mưa',
        singer:'Mr.Siro',
       img:'https://tse4.explicit.bing.net/th?id=OIP.OlinUJuN54UFa0cK-zae9QHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/em_gai_mua_mr_siro_lyrics_video_-5146126102845516680.mp3'
    },
    {
        name:'Gió',
        singer:'Jank',
       img:'https://tse3.mm.bing.net/th?id=OIP.iWrxg1nk18VqB6cUmNl3MAHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/gio_jank_lyrics_video_gio_mang_huong_ve_gio_em_o_dau_-4837873282395578493.mp3'
    },
    {
        name:'Họ yêu ai mất rồi',
        singer:'Doãn Hiếu',
       img:'https://tse4.mm.bing.net/th?id=OIP.QXzJfqqp0o2a-PYF6NzDswHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/ho_yeu_ai_mat_roi_l_doan_hieu_l_lofi_ver_by_mr_paa_-6932682654208702632.mp3'
    },
    {
        name:'Một bước yêu vạn dặm đau',
        singer:'Mr.Siro',
       img:'https://tse3.mm.bing.net/th?id=OIP.QV_zOHaVYVNiu0VQZ1sXDQHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/mot_buoc_yeu_van_dam_dau_lyrics_video_mr_siro_7076596236517131954.mp3'
    },
    {
        name:'Phố cũ còn anh',
        singer:'Quinn',
       img:'https://tse4.mm.bing.net/th?id=OIP.b9B9eLVaJtit0G9AQOJcCgHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/pho_cu_con_anh_quinn_ft_chilly_official_lyric_video_-4541602587948007735.mp3'
    },
    {
        name:'Từng Yêu',
        singer:'Phan Duy Anh',
       img:'https://tse2.mm.bing.net/th?id=OIP.FgeqddC61Ovh2zBrawtk1gHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/tung_yeu_phan_duy_anh_official_music_video_7728359322213954421.mp3'
    },
    {
        name:'Anh sẽ ổn thôi',
        singer:'Vương Anh Tú',
       img:'https://tse1.mm.bing.net/th?id=OIP.tPfppdawFlEj1L9oLB4DPAHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/anh_se_on_thoi_vuong_anh_tu_lyric_video_8564606874578320139.mp3'
    },
    {
        name:'Rồi ta sẽ ngắm pháo hoa cùng nhau',
        singer:'O.lew',
       img:'https://tse1.mm.bing.net/th?id=OIP.C2PhFXWyRBAY-9p5wUp4SQAAAA&pid=Api&P=0&h=180',
        music:'./aasset/music/roi_ta_se_ngam_phao_hoa_cung_nhau_mv_official_o_lew_-5387047832882934999.mp3'
    },
    {
        name:'Về bên anh',
        singer:'jack',
       img:'https://tse4.mm.bing.net/th?id=OIP.NcyLi2V9hlsyww7xkb3UyQHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/vi_doi_luc_anh_thay_em_gian_anh_qua_nen_thoi_ve_ben_anh_lofi_ver_jack_x_mihle_lyric_video_-8825021138615216483.mp3'
    },
    {
        name:'Hoa liễu úa màu',
        singer:'Huy TK',
       img:'https://tse2.mm.bing.net/th?id=OIP.-1-Ds0xuEW7qDpTQ3rB4MgHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/hoa_lieu_ua_mau_huy_kt_ft_nh4t_lofi_by_windv_radio_chill_-9186896363374075286.mp3'
    },
    {
        name:'Sao em vô tình',
        singer:'Jack',
       img:'https://tse4.mm.bing.net/th?id=OIP.LcMeuKsMnItYY9VhsbCqvAHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/roi_ta_se_ngam_phao_hoa_cung_nhau_mv_official_o_lew_-5387047832882934999.mp3'
    },
    {
        name:'Đời vô tư người vô tâm',
        singer:'Phát Huy T4',
       img:'https://tse1.mm.bing.net/th?id=OIP.CsOrOyEhKVksU8Rn728BSAHaFj&pid=Api&P=0&h=180',
        music:'./aasset/music/doi_vo_tu_nguoi_vo_tam_phat_huy_t4_official_lyric_video_-1805104472296180961.mp3'
    },
    {
        name:'Tình đẹp đến mấy cũng tàn',
        singer:'Như Việt',
       img:'https://tse2.mm.bing.net/th?id=OIP.z8bjUusLXFGyUyWM_plU-AHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/tinh_dep_den_may_cung_tan_lofi_ver_nhu_viet_ft_dinh_dung_x_vux_6288401740895919976.mp3'
    },
    {
        name:'Thuyền Quyên',
        singer:'Diệu Kiên',
       img:'https://tse3.mm.bing.net/th?id=OIP.wmf0rFUPUaFtH3M217kWJwHaEx&pid=Api&P=0&h=180',
        music:'./aasset/music/thuyen_quyen_lofi_ver_dieu_kien_x_caotri_1279613104225171772.mp3'
    },
    {
        name:'Cô thắm không về',
        singer:'X2X',
       img:'https://tse2.mm.bing.net/th?id=OIP.CetTUYCzeode0xz4E7zHHQHaHa&pid=Api&P=0&h=180'
    },
   
    {
        name:'Thiệp hồng người dưng',
        singer:'X2X',
       img:'https://tse3.mm.bing.net/th?id=OIP.daT-rVtf2OP7WH_02n0ubQHaHa&pid=Api&P=0&h=180',
        music:'./aasset/music/thiep_hong_nguoi_dung_ver_lofi_x2x_band_chill_tiktok_7038275348962080788.mp3'
    },
    {
        name:'Cơn mưa xa dần',
        singer:'Sơn Tùng MTP',
       img:'https://tse4.mm.bing.net/th?id=OIP.Osnz8cihuwsEwdVsWs3fjAHaEK&pid=Api&P=0&h=180',
        music:'./aasset/music/son_tung_m_tp_sky_decade_con_mua_xa_dan_449163883294620639.mp3'
    },
   
    
    
   ],   
  isStop:false, 
  isRandom:false,
  isRepeat:false,
  isPlaying:false,
  isHidden:false,
  config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  setConfig(key,value){
    this.config[key]=value;
    localStorage.setItem((PLAYER_STORAGE_KEY),JSON.stringify(this.config))
  },
   getProperty(){   
    Object.defineProperty(this,'currentSong',{  
      get:function(){   
        return this.songs[this.currentIndex];   
      } 
    })
   },
   render(){

    const htmls = this.songs.map((song,index)=>{
        return `
       
                    <li data-index="${index}" class="list-li ${index == this.currentIndex ? 'active' : ''}">
                        <div class="list-p">
                           <div class="list-index">
                               <p class>${index + 1}.</p>
                           </div>
                       <div class="list-name-item">
                           <p class="song-p">${song.name}</p>
                       <p class="singer-p">${song.singer}</p>
                       </div>
                       </div>
                       <div class="icon-list-tool">
                           <i class="fas fa-ellipsis-h"></i>
                       </div>
                    </li>                             
        `
    });
    $('.list').innerHTML=htmls.join('');
   },
   loadingConfig(){
    this.isRandom = this.config.isRandom;
    this.isRepeat= this.config.isRepeat;
    btnRandom.classList.toggle('active',this.isRandom);
    btnRepeat.classList.toggle('active',this.isRepeat);
   },
   loadingCurrentSongs(){
    const nameSong=$('.name-song');
    const imgItem=$('.img-item'); 
    const singer=$('.name-singer');
   nameSong.textContent=this.currentSong.name;
   singer.textContent=this.currentSong.singer;
   imgItem.style.backgroundImage=`url('${this.currentSong.img}')`
    audioItem.src=this.currentSong.music;
    
   },
   playMusic(){
    
    musicPlaying.onclick=function(){
        if(_this.isStop){

            _this.isStop=false;
            audioItem.pause();
            this.classList.remove('playing');
            rotateElement.pause();
            
        }else {

            _this.isStop=true;
            audioItem.play();
            this.classList.add('playing');
            rotateElement.play();
        }
    };

   const imgElement = $('.music-img');
   var rotateElement= imgElement.animate([
        {
        transform:"rotate(360deg)"
        }],
        {
            duration:11000,
            iterations: Infinity,
        }
    );
   rotateElement.pause();

   },
   propress(){
    
  audioItem.ontimeupdate=function(){
    if(this.duration){
        const propressPercent= Math.floor(this.currentTime / this.duration * 100);
        propress.value = propressPercent;
       
         }
    }
},

handleCurrentTime(){
    propress.onchange = function(e){
      
        const timeChange = audioItem.duration /  100* e.target.value;
      audioItem.currentTime = timeChange;
     
    
    };
   
      
     nextItemRight.onclick = ()=>{
   
        musicPlaying.classList.add('playing');
       
        if(this.isRandom){
            this.playRandom();
        }else{
            
            
            this.nextSongRight();
           
        
           
        }
            
      audioItem.play();
      this.render();
      this.scrollintoView();
     };
   
     nextItemLeft.onclick = ()=>{
        if(this.isRandom){
            this.playRandom();
        }else {
         
        
            this.nextSongLeft();
          
        }
      audioItem.play();
      this.render();
      this.scrollintoView();
     };
     playlist.onclick = (e)=>{
        const listItem = e.target.closest('.list-li:not(.active)');
        if(listItem || e.target.closest('.icon-list-tool')){
            if(listItem || !e.target.closest('.icon-list-tool')){
                this.currentIndex=Number(listItem.dataset.index);

                this.loadingCurrentSongs(); 
            }
            audioItem.play();
            this.render();
          
            }
     }
   },
  
   nextSongRight(){
    this.currentIndex++;
    if(this.currentIndex >= this.songs.length ){
        this.currentIndex= 0;
      
    }
    this.loadingCurrentSongs();

   },

   nextSongLeft(){
    this.currentIndex--;
    if(this.currentIndex < 0){
        this.currentIndex=this.songs.length - 1;
    }
    this.loadingCurrentSongs();
  
   },
  

  btnranDom(){
    btnRandom.onclick =()=>{
       this.isRandom=!this.isRandom;
       this.setConfig('isRandom',this.isRandom);
        btnRandom.classList.toggle('active',this.isRandom);
    }
  
  },
  btnRepeatAudio(){
    btnRepeat.onclick =()=>{
       this.isRepeat=!this.isRepeat;
       this.setConfig('isRepeat',this.isRepeat);
     
       btnRepeat.classList.toggle('active',this.isRepeat);
    }
  
  },
  playRandom(){
   let itemRandom ;
    do{
      itemRandom = Math.floor(Math.random() * this.songs.length);
        
    }while(itemRandom == this.currentIndex);
     this.currentIndex=itemRandom;
     this.loadingCurrentSongs();
  },
  autoNext(){
    audioItem.onended=()=>{
        if(this.isRepeat){
            audioItem.play();
        } else{
            nextItemRight.click();
        }
    }
  },
  scrollintoView(){
    setTimeout(()=>{
      $('.list-li.active').scrollIntoView({
            behavior:'smooth',
            block:'nearest',
        })
    },300);
  },
 showList(){
   
    showingup.onclick = ()=>{
          this.isHidden=!this.isHidden;
         
          if(this.isHidden){
            $('.list-music').classList.toggle('hidden',this.isHidden)
            $('.container').classList.add('hide-song');
          }
         
        }
    
        
  },
  hideList(){
    hiddenItem.onclick = ()=>{
        this.isHidden=!this.isHidden;
        if(this.isHidden){
            $('.list-music').classList.remove('hidden');
            $('.container').classList.remove('hide-song');
        }
    }
  },
   start(){
    this.handleCurrentTime();
    this.getProperty();
    this.render();
    this.loadingCurrentSongs();
    this.playMusic();
    this.propress();  
    this.nextSongRight();
    this.nextSongLeft();
    this.btnranDom();
    this.playRandom();
    this.autoNext();
    this.btnRepeatAudio();
    this.scrollintoView();
    this. setConfig();
   this.loadingConfig();
   this.showList();
   this.hideList();
   }
}
music.start();
