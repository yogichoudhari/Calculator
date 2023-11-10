
    $('document').ready(()=>{
        let ifInitialCall = true;
        $('#btn').click(()=>{ 
        function calculator(num1,num2,operator,ops=''){
            $.ajax({
                url:'calc',
                type:'GET',
                dataType:'json',
                data : {
                    num1 : num1,
                    num2 : num2,
                    operator: operator
                },
                success:function(data){
                    $('#result').val(data.result)
                    let result = $('#result').val()
                    let operations = $('#operations').val()
                    let total_operations = operations + ops
                    $('#operations').val(total_operations)
                    localStorage.setItem('result',result)
                    $('#num1').attr("disabled",true)
                    $('input[name="perm"]:checked').prop("checked",false)
                    $('option:selected').prop('selected',false)
                    $('.continue').css('display','block')   
                    $('#num2').val('')
                    $('#num2').attr('disabled', true)
                    $('#num1').css('display','none')  
                },
                error:function(xhr,status,error){
                    console.log(error)
                }
            })
        }
        if (ifInitialCall){
            let num1 = $("#num1").val()
            let num2 = $('#num2').val()
            let operator = $('#operator').val() 
            $('#operations').val(String(num1)+operator+String(num2))
            calculator(num1,num2,operator)
            }
        

        $('input[name="perm"]').click(()=>{
            if($('input[name="perm"]:checked').val() == 'yes'){
                ifInitialCall = false
                $('#num2').attr('disabled', false)
                $('#btn').addClass('next')
                $('.next').removeAttr('id')
                $('.next').click(()=>{
                let result_val = $('#result').val()
                let operator = $('#operator').val()
                let num2 = $('#num2').val()
                let ops = operator + String(num2)
                calculator(result_val,num2,operator,ops)
                })
                
            }
            else{
                
                final_result = localStorage.getItem('result')
                console.log(final_result)
                $('.calc').html(`<h3>Your final Ans is ${final_result}</h3>`)
            }
        })
        
        })
    })