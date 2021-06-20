import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  public teamData = [
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/abhimanyu.bhardwaj.5682?ref=bookmarks", 
      "Github": "https://github.com/abhimanyu1998", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AbhimanyuBhardwaj.jpg", 
      "Insta": "https://instagram.com/info4abhimanyu?igshid=1ijg5eq06490s", 
      "Linkedin": "https://www.linkedin.com/in/abhimanyu-bhardwaj-641220151", 
      "Name": "Abhimanyu Bhardwaj", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "https://www.behance.net/abhishekgupta4", 
      "Facebook": "https://www.facebook.com/AbhishekGupta160898/", 
      "Github": "https://github.com/Abhishek0402", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AbhishekGupta.jpg", 
      "Insta": "https://www.instagram.com/its_abhi0402/", 
      "Linkedin": "https://www.linkedin.com/in/abhi0402/", 
      "Name": "Abhishek Gupta", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/profile.php?id=100017790647340", 
      "Github": "", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AditiSinha.jpg", 
      "Insta": "https://www.instagram.com/aditi_sinha_1804/", 
      "Linkedin": "https://www.linkedin.com/in/aditi-sinha-19b35a191", 
      "Name": "Aditi Sinha", 
      "Tech": "Application Developer ", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/aishwary.srivastava.98", 
      "Github": "https://github.com/aishwary76", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/Aishwarya.jpg", 
      "Insta": "https://www.instagram.com/aishwaryashutosh/", 
      "Linkedin": "https://www.linkedin.com/in/aishwary-ashutosh-858b22199/", 
      "Name": "Aishwary Ashutosh", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/amol.sr/", 
      "Github": "https://github.com/amolsr", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AmolSaini.jpg", 
      "Insta": "https://www.instagram.com/amol.sr/?hl=en", 
      "Linkedin": "https://www.linkedin.com/in/amolsr/", 
      "Name": "Amol Saini", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/Anshul3010", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/Anshul.jpeg", 
      "Insta": "", 
      "Linkedin": "https://www.linkedin.com/in/anshul-srivastava-b4b5021a4", 
      "Name": "Anshul Srivastava", 
      "Tech": "Web Developer", 
      "Year": 4
    },  
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/ashish.varshney.94651?ref=bookmarks", 
      "Github": "https://github.com/ashish234251", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/Ashish.jpg", 
      "Insta": "https://www.instagram.com/mrvarshney/", 
      "Linkedin": "https://www.linkedin.com/in/ashish-varshney-b69b29118", 
      "Name": "Ashish Varshney", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "http://fb.com/dkumar.168", 
      "Github": "http://github.com/deep-esh7", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/DeepeshKumar.jpeg", 
      "Insta": "http://instagram.com/deep_esh7", 
      "Linkedin": "http://linkedin.com/deepesh07", 
      "Name": "Deepesh Kumar", 
      "Tech": "Application Developer ", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/MuditShrivastava1810.", 
      "Github": "https://github.com/Deadlegend1321?tab=repositories", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/MuditAgarwal.jpg", 
      "Insta": "https://www.instagram.com/mudit_1318/", 
      "Linkedin": "", 
      "Name": "Mudit Shrivastava", 
      "Tech": "Application Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/promodeyadav007", 
      "Github": "https://github.com/promodeyadav", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/PramodJaiswal.jpg", 
      "Insta": "https://www.instagram.com/pro_mode_yadav/", 
      "Linkedin": "https://www.linkedin.com/mwlite/in/promodeyadav", 
      "Name": "Pramod Yadav", 
      "Tech": "Application Developer ", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/ravindra.singh.1654700", 
      "Github": "https://github.com/ravindra9817", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/RavindraKumar.jpg", 
      "Insta": "https://www.instagram.com/ravindra_1singh/", 
      "Linkedin": "https://www.linkedin.com/mwlite/in/ravindra-kumar-688a5a192", 
      "Name": "Ravindra Kumar", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/shikhar11agarwal", 
      "Github": "https://github.com/shikhar1111", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/ShikharAgarwal.jpeg", 
      "Insta": "https://www.instagram.com/shikharagarwal__/", 
      "Linkedin": "https://www.linkedin.com/in/shikhar-agarwal-56148016b/", 
      "Name": "Shikhar Agarwal", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/shraddha.mishra.963?ref=bookmarks", 
      "Github": "https://github.com/SHRADDHAMISHRA-sys", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/ShraddhaMishra.jpg", 
      "Insta": "", 
      "Linkedin": "https://www.linkedin.com/in/shraddha-mishra-193264187", 
      "Name": "Shraddha Mishra", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "https://www.behance.net/sidcredible", 
      "Facebook": "https://www.facebook.com/sidcredible1", 
      "Github": "https://github.com/sidcredible", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/SiddharthaAnand.jpg", 
      "Insta": "https://www.instagram.com/sidcredible/", 
      "Linkedin": "https://www.linkedin.com/in/sidcredible/", 
      "Name": "Siddhartha Anand", 
      "Tech": "UI/UX Designer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/suchendrasharma", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/SuchendraSharma.jpeg", 
      "Insta": "https://www.instagram.com/suchendra_sharma/", 
      "Linkedin": "https://www.linkedin.com/in/suchendra-sharma-524343155/", 
      "Name": "Suchendra Sharma", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/sharmaujjawal01", 
      "Github": "https://github.com/sharmaujjawal01", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/UjjwalSharma.jpg", 
      "Insta": "https://www.instagram.com/ujjawal.sharma/", 
      "Linkedin": "https://www.linkedin.com/in/sharmaujjawal01/", 
      "Name": "Ujjawal Sharma", 
      "Tech": "Web Developer", 
      "Year": 4
    }, 
    {
      "Behance": "https://www.behance.net/utkarsh949f562", 
      "Facebook": "https://www.facebook.com/utkarsh.jaiswal.9847", 
      "Github": "https://github.com/stylox09", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/UtkarshJaiswal.jpg", 
      "Insta": "https://instagram.com/im_utkarsh_jais", 
      "Linkedin": "https://linkedin.com/in/utkarshjais09", 
      "Name": "Utkarsh Jaiswal", 
      "Tech": "UI/UX Designer", 
      "Year": 4
    }, 
    {
      "Behance": "https://www.behance.net/vishalnegi428", 
      "Facebook": "https://www.facebook.com/vishal.negi.359", 
      "Github": "https://github.com/vishalnegi428", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/VishalNegi.jpeg", 
      "Insta": "https://www.instagram.com/left_handed_pro_max/", 
      "Linkedin": "https://www.linkedin.com/in/vishalnegi428/", 
      "Name": "Vishal Negi", 
      "Tech": "UI/UX Designer", 
      "Year": 4
    },
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/Anshika10th", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AnshikaBajpai.jpg", 
      "Insta": "https://www.instagram.com/anshika_bajpai1/", 
      "Linkedin": "http://linkedin.com/in/anshika-bajpai-73b5761ab", 
      "Name": "Anshika Bajpai", 
      "Tech": "Application Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/deepika9560", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/DeepikaMaurya.jpg", 
      "Insta": "http://instagram.com/mauryadeepika_", 
      "Linkedin": "https://www.linkedin.com/in/deepika-maurya-145b091a9", 
      "Name": "Deepika Maurya", 
      "Tech": "Web Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/harshgupta.80700/", 
      "Github": "https://github.com/harshgupta80700", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/HarshGupta.jpg", 
      "Insta": "https://www.instagram.com/_harsh.hg807_/", 
      "Linkedin": "https://www.linkedin.com/in/harsh-gupta-129233145/", 
      "Name": "Harsh Gupta", 
      "Tech": "Application Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/himani100700", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/HimaniChauhan.jpg", 
      "Insta": "https://www.instagram.com/1007_himani/", 
      "Linkedin": "https://www.linkedin.com/in/himani-chauhan-100700/", 
      "Name": "Himani Chauhan", 
      "Tech": "Web Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/profile.php?id=100029487126213", 
      "Github": "https://github.com/himanshisingh1304", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/HimanshiSingh.jpg", 
      "Insta": "https://www.instagram.com/hiiimanshii/", 
      "Linkedin": "https://www.linkedin.com/in/himanshi-singh-47b795191", 
      "Name": "Himanshi Singh", 
      "Tech": "Web Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/profile.php?id=100040432548775", 
      "Github": "https://github.com/Palak2820", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/PalakAgarwal.jpg", 
      "Insta": "https://www.instagram.com/palak_2808/", 
      "Linkedin": "https://www.linkedin.com/in/palak-tiwari-94334b19a/", 
      "Name": "Palak Agarwal", 
      "Tech": "Web Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/profile.php?id=100010054141228", 
      "Github": "https://github.com/cprakhar007", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/PrakharPratap.jpg", 
      "Insta": "https://www.instagram.com/cprakhar007/", 
      "Linkedin": "https://www.linkedin.com/in/prakhar-chauhan-227594192/", 
      "Name": "Prakhar Pratap", 
      "Tech": "Application Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/rachit.agarwal.184881/", 
      "Github": "https://github.com/Rachit7299", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/RachitAgarwal.jpg", 
      "Insta": "https://www.instagram.com/rachit_agarwal1/", 
      "Linkedin": "https://www.linkedin.com/in/rachit-agarwal-65bb571a4/", 
      "Name": "Rachit Agarwal", 
      "Tech": "Web Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/asli.pahari/", 
      "Github": "https://github.com/shivam-S-bisht/", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/ShivamBisht.jpg", 
      "Insta": "https://www.instagram.com/asli_pahari/", 
      "Linkedin": "https://www.linkedin.com/in/shivam-bisht-154b461b0/", 
      "Name": "Shivam Bisht", 
      "Tech": "Web Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/visheshdvn/", 
      "Github": "https://github.com/visheshdvn", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/VisheshDhawan.jpg", 
      "Insta": "https://www.instagram.com/visheshdvn/", 
      "Linkedin": "https://www.linkedin.com/in/visheshdvn/", 
      "Name": "Vishesh Dhawan", 
      "Tech": "Web Developer", 
      "Year": 3
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/aniket.kesarwani.37", 
      "Github": "https://github.com/aniket5459", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AniketKesarwani.jpg", 
      "Insta": "https://www.instagram.com/aniket._.kesarwani.007/", 
      "Linkedin": "https://www.linkedin.com/in/aniket-kesarwani-58709315b/", 
      "Name": "Aniket Kesarwani", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "https://www.behance.net/apoorvmaheshw", 
      "Facebook": "https://m.facebook.com/apoorv.maheshwari.77", 
      "Github": "https://github.com/Apoorv-cloud", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/ApoorvMaheshwari.jpg", 
      "Insta": "https://instagram.com/maheshwari__apoorv?igshid=35jid2u2ui83", 
      "Linkedin": "https://www.linkedin.com/in/apoorv-maheshwari-6689791aa", 
      "Name": "Apoorv Maheshwari", 
      "Tech": "Application Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/archit.garg.106/", 
      "Github": "https://github.com/architgarg13", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/ArchitGarg.png", 
      "Insta": "https://www.instagram.com/archit_0308/", 
      "Linkedin": "https://www.linkedin.com/in/archit-garg-904791119", 
      "Name": "Archit Garg", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/ayush.mohan.961", 
      "Github": "https://github.com/Ayush-Mohan", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AyushMohan.jpg", 
      "Insta": "https://www.instagram.com/mohan_ayush_007", 
      "Linkedin": "https://www.linkedin.com/in/ayush-mohan-74aa921ba", 
      "Name": "Ayush Mohan", 
      "Tech": "Application Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/ayush.rawat.3950", 
      "Github": "https://github.com/AyushRawat-17", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AyushRawat.jpg", 
      "Insta": "https://www.instagram.com/rawat_ayush17/", 
      "Linkedin": "https://www.linkedin.com/in/ayush-rawat-a61828196/", 
      "Name": "Ayush Rawat", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://www.github.com/ayushisaxena19", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/AyushiSaxena.jpg", 
      "Insta": "https://www.instagram.com/_ayushisaxena19/", 
      "Linkedin": "https://www.linkedin.com/in/ayushi-saxena-9b50891b9", 
      "Name": "Ayushi Saxena", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/muskan.bansal.73932?ref=bookmarks", 
      "Github": "https://github.com/muskanb1408", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/MuskanBansal.jpg", 
      "Insta": "https://instagram.com/muskanb1408?igshid=1vr0t6s8m5vt0", 
      "Linkedin": "https://www.linkedin.com/in/muskan-bansal-8ba0981a8", 
      "Name": "Muskan Bansal", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/priya.karnwal.3954", 
      "Github": "https://github.com/karnwalpriya", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/PriyaKarnwal.jpg", 
      "Insta": " https://www.instagram.com/priya._.10/", 
      "Linkedin": "https://www.linkedin.com/in/priya-karnwal-5a28b11b1", 
      "Name": "Priya Karnwal", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    // {
    //   "Behance": "", 
    //   "Facebook": "", 
    //   "Github": "https://github.com/Pulkit663", 
    //   "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/PulkitTaneja.jpg", 
    //   "Insta": "https://instagram.com/pulkit6005?igshid=10uwoy4eh5yb3", 
    //   "Linkedin": "https://www.linkedin.com/in/pulkit-taneja-5537521b9/", 
    //   "Name": "Pulkit Taneja ", 
    //   "Tech": "Web Developer", 
    //   "Year": 2
    // }, 
    {
      "Behance": "https://www.behance.net/rupalmathur1", 
      "Facebook": "https://www.facebook.com/rupal.mathur.35", 
      "Github": "https://github.com/rupal-mathur1", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/RupalMathur.png", 
      "Insta": "https://www.instagram.com/rupalmathur001?r=nametag", 
      "Linkedin": "https://www.linkedin.com/in/rupal-mathur-695a961ba", 
      "Name": "Rupal Mathur", 
      "Tech": "Application Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/rydam.agrawal", 
      "Github": "https://github.com/rydam1403", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/RydamAgrawal.jpg", 
      "Insta": "https://instagram.com/rydam44?igshid=1gfnfom9axjsb", 
      "Linkedin": "https://www.linkedin.com/in/rydam-agrawal-44a1921a8", 
      "Name": "Rydam Agrawal ", 
      "Tech": "Application Developer", 
      "Year": 2
    }, 
    {
      "Behance": "https://www.behance.net/saatvikrawat", 
      "Facebook": "https://www.facebook.com/saatvik.rawat", 
      "Github": "https://github.com/Saatvik14", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/SaatvikRawat.jpg", 
      "Insta": "https://www.instagram.com/saatvik_14/", 
      "Linkedin": "https://www.linkedin.com/in/saatvik-rawat-316042199/", 
      "Name": "Saatvik Rawat", 
      "Tech": "Application Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/SammyStark", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/SamkitJain.jpg", 
      "Insta": "https://www.instagram.com/samkit._.jain/", 
      "Linkedin": "https://www.linkedin.com/in/samkit-jain-a51b9a1aa/", 
      "Name": "Samkit Jain", 
      "Tech": "Application Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "  https://github.com/Sejal260", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/SejalSaraogi.jpg", 
      "Insta": "", 
      "Linkedin": "https://www.linkedin.com/in/sejal-saraogi-7ba7651ba  ", 
      "Name": "Sejal Saraogi", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/stuti1402", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/StutiGoyal.jpg", 
      "Insta": "https://www.instagram.com/stuti1_4/", 
      "Linkedin": "https://www.linkedin.com/in/stuti-goyal-a66aa61ba/", 
      "Name": "Stuti Goyal", 
      "Tech": "Application Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/", 
      "Github": "https://github.com/sudhanshu19s", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/SudhanshuShrotriya.jpg", 
      "Insta": "https://www.instagram.com/", 
      "Linkedin": "https://www.linkedin.com/feed/", 
      "Name": "sudhanshu shrotriya", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/suryanshu.verma.5", 
      "Github": "https://github.com/suryanshuverma", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/SuryanshuVerma.jpg", 
      "Insta": "https://www.instagram.com/suryanshu_verma_/", 
      "Linkedin": "https://www.linkedin.com/in/suryanshu-verma-7a9aa31ba", 
      "Name": "Suryanshu Verma", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://m.facebook.com/profile.php", 
      "Github": "https://github.com/VaibhavRaj-lab/BRL-project-Vaibhav", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/VaibhavRaj.jpg", 
      "Insta": "https://www.instagram.com/v_ai_bhav_raj/", 
      "Linkedin": "https://www.linkedin.com/in/vaibhav-raj-416a661ba", 
      "Name": "Vaibhav Raj ", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "", 
      "Github": "https://github.com/singh15varun", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/VarunSingh.jpg", 
      "Insta": "https://www.instagram.com/singh15varun/", 
      "Linkedin": "https://www.linkedin.com/in/varun-pratap-singh-4a49451b0", 
      "Name": "Varun Pratap Singh", 
      "Tech": "Web Developer", 
      "Year": 2
    }, 
    {
      "Behance": "", 
      "Facebook": "https://www.facebook.com/vikram.rai.35513/", 
      "Github": "https://github.com/Vikramrai14", 
      "Image": "https://raw.githubusercontent.com/Blockchain-Research-Lab/brl-website-assets/master/VikramRai.jpg", 
      "Insta": "https://www.instagram.com/vikram_aditya_rai/", 
      "Linkedin": "https://www.linkedin.com/in/vikram-aditya-rai-a07a931ba/", 
      "Name": "Vikram Aditya Rai", 
      "Tech": "Web Developer", 
      "Year": 2
    }
  ]
}
