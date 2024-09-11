
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import u1 from '../assets/university/u12.jfif'
import u2 from '../assets/university/u13.jfif'
import u3 from '../assets/university/u14.jfif'
import u4 from '../assets/university/u19.jfif'
import u5 from '../assets/university/u16.jfif'
const CompareDetails = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    schoolFees: '',
    onBoarding: '',
    LGA: '',
    transportation: '',
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:4000/schoolscompare', {
        params: searchParams
      });
      setResults(response.data);
      if (response.status === 200) {
        toast.success("Successfully fetched");
      } else {
        toast.error("An error occurred");
      }
    } catch (error) {
      console.error('Error fetching schools:', error);
      toast.error("An error occurred externally");
    }
  };








  
const NigerianStates = {
  Abia: [
    'Aba North', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala Ngwa North', 'Isiala Ngwa South',
    'Isuikwuato', 'Obi Ngwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North',
    'Umuahia South', 'Umu Nneochi'
  ],
  Adamawa: [
    'Demsa', 'Fufore', 'Ganye', 'Girei', 'Gombi', 'Guyuk', 'Hong', 'Jada', 'Lamurde', 'Madagali', 'Maiha',
    'Mayo-Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North',
    'Yola South'
  ],
  AkwaIbom: [
    'Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan',
    'Ibiono-Ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Atai',
    'Nsit-Ibom', 'Nsit-Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udung-Uko', 'Ukanafun', 'Uruan',
    'Urue-Offong/Oruko', 'Uyo'
  ],
  Anambra: [
    'Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia',
    'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 
    'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'
  ],
  Bauchi: [
    'Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Itas/Gadau', 'Jama\'are',
    'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa Balewa', 'Toro', 'Warji', 'Zaki'
  ],
  Bayelsa: [
    'Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa'
  ],
  Benue: [
    'Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande',
    'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu', 'Otukpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'
  ],
  Borno: [
    'Abadam', 'Askira/Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul',
    'Jere', 'Kaga', 'Kala/Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 
    'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'
  ],
  CrossRiver: [
    'Abi', 'Akamkpa', 'Akpabuyo', 'Bakassi', 'Bekwarra', 'Biase', 'Boki', 'Calabar Municipal', 'Calabar South',
    'Etung', 'Ikom', 'Obanliku', 'Obubra', 'Obudu', 'Odukpani', 'Ogoja', 'Yakuur', 'Yala'
  ],
  Delta: [
    'Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South',
    'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani',
    'Sapele', 'Udu', 'Ughelli North', 'Ughelli South', 'Ukwuani', 'Uvwie', 'Warri North', 'Warri South', 'Warri South West'
  ],
  Ebonyi: [
    'Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo',
    'Izzi', 'Ohaukwu', 'Onicha'
  ],
  Edo: [
    'Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central',
    'Etsako East', 'Etsako West', 'Igueben', 'Ikpoba-Okha', 'Oredo', 'Orhionmwon', 'Ovia North-East', 'Ovia South-West',
    'Owan East', 'Owan West', 'Uhunmwonde'
  ],
  Ekiti: [
    'Ado-Ekiti', 'Efon', 'Ekiti East', 'Ekiti South-West', 'Ekiti West', 'Emure', 'Gbonyin', 'Ido-Osi', 'Ijero',
    'Ikere', 'Ikole', 'Ilejemeje', 'Irepodun/Ifelodun', 'Ise/Orun', 'Moba', 'Oye'
  ],
  Enugu: [
    'Aninri', 'Awgu', 'Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo Etiti', 'Igbo Eze North', 'Igbo Eze South',
    'Isi Uzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Oji River', 'Udenu', 'Udi', 'Uzo-Uwani'
  ],
  Gombe: [
    'Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu/Deba'
  ],
  Imo: [
    'Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 
    'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor Okpala', 'Njaba', 'Nkwerre', 'Nwangele', 'Obowo', 'Oguta',
    'Ohaji/Egbema', 'Okigwe', 'Onuimo', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri Municipal', 'Owerri North', 
    'Owerri West'
  ],
  Jigawa: [
    'Auyo', 'Babura', 'Biriniwa', 'Birnin Kudu', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram',
    'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa', 'Kaugama', 'Kazaure', 'Kiri Kasama', 'Kiyawa', 'Maigatari', 
    'Malam Madori', 'Miga', 'Ringim', 'Roni', 'Sule Tankarkar', 'Taura', 'Yankwashi'
  ],
  Kaduna: [
    'Birnin Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', 'Jema\'a', 'Kachia', 'Kaduna North', 'Kaduna South',
    'Kagarko', 'Kajuru', 'Kaura', 'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makarfi', 'Sabon Gari', 'Sanga', 'Soba',
    'Zangon Kataf', 'Zaria'
  ],
  Kano: [
    'Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa',
    'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal',
    'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano',
    'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 
    'Warawa', 'Wudil'
  ],
  Katsina: [
    'Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi',
    'Dutsin Ma', 'Faskari', 'Funtua', 'Ingawa', 'Jibia', 'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi', 
    'Kusada', 'Mai\'Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 
    'Zango'
  ],
  Kebbi: [
    'Aleiro', 'Arewa Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fakai', 'Gwandu', 'Jega',
    'Kalgo', 'Koko/Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri', 'Zuru'
  ],
  Kogi: [
    'Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela Odolu', 'Ijumu', 'Kabba/Bunu', 'Kogi',
    'Lokoja', 'Mopa Muro', 'Ofu', 'Ogori/Magongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Yagba East', 'Yagba West'
  ],
  Kwara: [
    'Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin',
    'Kaiama', 'Moro', 'Offa', 'Oke Ero', 'Oyun', 'Pategi'
  ],
  Lagos: [
    'Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju-Lekki',
    'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo',
    'Shomolu', 'Surulere'
  ],
  Nasarawa: [
    'Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Lafia', 'Nasarawa', 'Nasarawa Egon', 'Obi', 
    'Toto', 'Wamba'
  ],
  Niger: [
    'Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora',
    'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Moya', 'Paikoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja',
    'Tafa', 'Wushishi'
  ],
  Ogun: [
    'Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East',
    'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko Afon', 'Ipokia', 'Obafemi Owode', 'Odeda', 
    'Odogbolu', 'Ogun Waterside', 'Remo North', 'Shagamu'
  ],
  Ondo: [
    'Akoko North-East', 'Akoko North-West', 'Akoko South-East', 'Akoko South-West', 'Akure North', 'Akure South', 
    'Ese Odo', 'Idanre', 'Ifedore', 'Ilaje', 'Ile Oluji/Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West',
    'Ose', 'Owo'
  ],
  Osun: [
    'Aiyedaade', 'Aiyedire', 'Atakumosa East', 'Atakumosa West', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South',
    'Egbedore', 'Ejigbo', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Ifedayo', 'Ifelodun', 'Ila', 'Ilesa East',
    'Ilesa West', 'Irepodun', 'Irewole', 'Isokan', 'Iwo', 'Obokun', 'Odo Otin', 'Ola Oluwa', 'Olorunda', 'Oriade', 
    'Orolu', 'Osogbo'
  ],
  Oyo: [
    'Afijio', 'Akinyele', 'Atiba', 'Atisbo', 'Egbeda', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West',
    'Ibadan South-East', 'Ibadan South-West', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin',
    'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogo Oluwa', 'Ogbomosho North', 'Ogbomosho South', 'Olorunsogo', 
    'Oluyole', 'Ona Ara', 'Orelope', 'Ori Ire', 'Oyo East', 'Oyo West', 'Saki East', 'Saki West', 'Surulere'
  ],
  Plateau: [
    'Barkin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North',
    'Langtang South', 'Mangu', 'Mikang', 'Pankshin', 'Qua\'an Pan', 'Riyom', 'Shendam', 'Wase'
  ],
  Rivers: [
    'Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Eleme', 
    'Emohua', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obio/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okrika', 'Omuma',
    'Opobo/Nkoro', 'Oyigbo', 'Port Harcourt', 'Tai'
  ],
  Sokoto: [
    'Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Isa', 'Kebbe', 'Kware', 
    'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tangaza', 'Tureta',
    'Wamako', 'Wurno', 'Yabo'
  ],
  Taraba: [
    'Ardo Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Ibi', 'Jalingo', 'Karim Lamido', 'Kurmi', 'Lau', 'Sardauna',
    'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'
  ],
  Yobe: [
    'Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina',
    'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari'
  ],
  Zamfara: [
    'Anka', 'Bakura', 'Birnin Magaji/Kiyaw', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura Namoda', 'Maradun', 
    'Maru', 'Shinkafi', 'Talata Mafara', 'Zurmi'
  ],
  FCT: ['Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal Area Council']
}



const [formData2, setFormData2] = useState({
  location: '', // State
  LGA: '' // Local Government Area
});

// Handles input change for both location and LGA
const handleInput2Change = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};



















  // Inline styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const resultContainerStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9'
  };

  const resultItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  };

  const headingStyle = {
    margin: '0 0 10px',
    fontSize: '18px',
    color: '#333'
  };

  const subHeadingStyle = {
    margin: '5px 0',
    fontSize: '16px',
    color: '#666'
  };







  const styles = {
    header: {
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '300px',
        height: '50px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '10px 15px',
        fontSize: '26px',
        position: 'relative',
        backgroundColor: '#f9f9f9',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27currentColor%27 class=%27bi bi-plus-circle%27 viewBox=%270 0 16 16%27%3E%3Cpath d=%27M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z%27/%3E%3Cpath d=%27M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z%27/%3E%3C/svg%3E")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center',
        outline: 'none',
    },
    button: {
        marginTop: '20px',
        width: '200px',
        height: '50px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '18px',
        cursor: 'pointer',
        alignSelf: 'center',
    },
    inputWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '960px',
    },
    comparisonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: '20px',
        flexWrap: 'wrap',
    },
    card: {
        width: '30%',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '20px',
    },
    cardImg: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
    },
    cardBody: {
        padding: '10px',
    },
    cardTitle: {
        margin: '0',
        color: '#00458b',
    },
    viewDetailButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    infoTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        
    },
    infoTableHeader: {
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ccc',
    },
    infoTableCell: {
        padding: '10px',
        border: '1px solid #ccc',
        fontSize:'20px'
    },
    infoTableCellBold: {
        padding: '10px',
        border: '1px solid #ccc',
        fontWeight: 'bold',
    },
    addSchoolContainer: {
        width: '48px',
        height: '150px',
        border: '1px dashed #ccc',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    addSchoolText: {
        fontSize: '24px',
        color: '#ccc',
    },
};


  return (
    <div style={containerStyle}>
    <select name="state" onChange={handleChange} value={searchParams.state}>
  <option value="">Select a State</option>
  {Object.keys(NigerianStates).map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ))}
</select>

{searchParams.state && (
  <select name="LGA" onChange={handleChange} value={searchParams.LGA}>
    <option value="">Select an LGA</option>
    {NigerianStates[searchParams.state].map((lga) => (
      <option key={lga} value={lga}>
        {lga}
      </option>
    ))}
  </select>
)}



      <input
        type="number"
        name="schoolFees"
        value={searchParams.schoolFees}
        onChange={handleChange}
        placeholder="School Fees"
        style={inputStyle}
      />
      <select
        name="onBoarding"
        value={searchParams.onBoarding}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
      >
        <option value="">Do you prefer a school that has boarding? Select...</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <select
        name="transportation"
        value={searchParams.transportation}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
      >
        <option value="">Do you prefer a school that has a school Bus? Select...</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>


{/* 
      <input
        type="text"
        name="name"
        value={searchParams.name}
        onChange={handleChange}
        placeholder="Address" 
        style={inputStyle}
      /> */}
      <button onClick={handleSearch} style={buttonStyle}>Search</button>

      <div style={styles.comparisonContainer}>
        {results.length > 0 ? (
          results.map((school) => (
            <div key={school._id} style={styles.card}>
               <div style={styles.cardBody}>
               <img src={u1} alt="School 1" style={styles.cardImg} />
              <h4 style={styles.cardTitle}>{school.school}</h4>
              <table style={styles.infoTable}>
                <thread>
                  <tr>
                  
                  <th style={styles.infoTableHeader}>Details</th>
                  </tr>
                </thread>
                <tbody>
                <tr>
                                            <td style={styles.infoTableCellBold}>Location</td>
                                            <td style={styles.infoTableCell}>{school.location}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>minimum School fees</td>
                                            <td style={styles.infoTableCell}>{school.schoolFees}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Onboarding</td>
                                            <td style={styles.infoTableCell}>{school.onBoarding}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>Address</td>
                                            <td style={styles.infoTableCell}>{school.name}</td>
                                        </tr>

                                        <tr>
                                            <td style={styles.infoTableCellBold}>Local Govt Area</td>
                                            <td style={styles.infoTableCell}>{school.LGA}</td>
                                        </tr>
                                        <tr>
                                            <td style={styles.infoTableCellBold}>School Bus Avilability</td>
                                            <td style={styles.infoTableCell}>{school.transportation}</td>
                                        </tr>
                </tbody>

              </table>
            


               </div>
             
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default CompareDetails;
