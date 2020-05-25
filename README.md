# Javascript

Skeleton

#redux là thư viện js quản lý các state, mà các state này có thể dự đoán trước, luôn luôn đi 1 chiều
#Gồm STORE-VIEW-ACTIONS
REDUCE=Actions+ State hiện tại=> tạo ra cái STATE mới
#REDUCE là function nhận vào 2 thứ : state hiện tại, actions được gởi lên=> biến đổi=> tạo ra state mới
#Responsive- Viewport- Media query(@media)- Breakpoins?
#Breakpoinss làn những điểm/vị trí mà bố cục website sẽ thay đổi- thích ứng để tạo nên giao diện responsive
#Thường có 3 breakpoins được áp dụng:

.mobile,
.table,
.pc{
margin:auto;
font-size:100px;
color:#fffl
display:none;
}

<!-- Mobile: width< 740px -->

@media only screen and (max-width:739px){
.mobile{
display:block;
}
}

<!-- Tablet: width>=740px and width<1024px -->

@media only screen and (min-width:740px) and (max-width:1023px){
.table{
display.block;
}
}

<!-- PC: width: >=1024px -->

@media only screen and (min-width:1024px){

}
