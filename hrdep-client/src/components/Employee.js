import{useState,useEffect} from 'react';

export const Employee=(props)=>{

    //1-зображення за умовчуванням
    const defImageSrc='/img/def.png';

    //2-об'ект  для групування властивостей робітника
    const initialFieldValues={
        employeeId:0,
        employeeName:'',
        occupation:'',
        imageName:'',
        imageSrc:defImageSrc,
        imageFile:null
    }

    //3-Розпаковка транзитних змінних із посиланням на зовнішні функціі
    const {opAddOrEdit,recordForEdit}=props;

    //4-хуки знчень властивостей та значень валідаційних помилок
    const[values,setValues]=useState(initialFieldValues);
    const [errors,setErrors]=useState({});
    
    //5-ініціалізація режиму використання форми
    useEffect(()=>{
        if(recordForEdit!=null){
            setValues(recordForEdit);
        }
    },{recordForEdit})

    //6-Обробник подій зміни вмісту елементів форми
    const handleInputChange = e =>{
        const{name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };

    //7-функція для визначення зобр у формі співробітника
    const showPreview=e=>{
        if(e.target.files && e.target.files[0]){
            let imageFile=e.target.files[0];
            const reader = new FileReader();
            reader.onload=f=>{
                setValues({
                    ...values,
                    imageFile:imageFile,
                    imageSrc:f.target.result
                });
            };
            reader.readAsDataURL(imageFile);
        }
        else {
            setValues({
                ...values,
                imageFile:null,
                imageSrc:defImageSrc
            });
        }
    
    }

    //8-функція для валідаціі данних форми
    const validate=()=>{
        let temp={};
        temp.employeeName=values.employeeName==''?false:true;
        temp.imageSrc=values.imageSrc==defImageSrc?false:true;
        setErrors(temp);
        return Object.values(temp).every(x=>x==true);

    }

    //9-функція скидання значнь полів форми
    const resetForm=()=>{
        setValues(initialFieldValues);
        document.getElementById('image-uploader').value=null;
        setErrors({});
    }


    const handleFormSubmit = e=>{
        e.preventDefault();
        if(validate()){
            const formData = new FormData();
            formData.append('employeeId',values.employeeId);
            formData.append('employeeName',values.employeeName);
            formData.append('occupation',values.occupation);
            formData.append('imageName',values.imageName);
            formData.append('imageFile',values.imageFile);

            opAddOrEdit(formData,resetForm);
        }

    }

    //11-функція активаціі классу валідаційних помилок
    const applyErrorClass = (field)=> {
        return(field in errors &&errors[field]==false) ? 'incorrect-data':'';

    }



    return(
        <>
        <div className="container">
            <p className="lead">Card of employee</p>
        </div>
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
                <img src={values.imageSrc} className="card-img-top" alt='...'/>
                 <div className="card-body">
                        <div className="form-group mb-2">
                        <input type="file" accept='image/*' className={'form-control-file'+applyErrorClass('imageSrc')} id='image-uploader' onChange={showPreview}/>
                    </div>
                    <div className="form-group mb-2">
                        <input className={'form-control'+applyErrorClass('EmployeeName')} placeholder='Employee name' name='employeeName' value={values.employeeName} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input className={'form-control'+applyErrorClass('occupation')} placeholder='Occupation' name='occupation' value={values.occupation} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group text-center">
                        <button type='submit' className='btn btn-primary mt-3'>Save</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}