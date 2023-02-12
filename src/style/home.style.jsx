import styled from "styled-components";

const HomeWrapper = styled.div`
   .home {

      .title {
         p ,span{
            font-size: 1.4rem;
         }

         span {
            color: #daa520;
            font-weight:600;
         }
      } 

      .about {
         .about_details {
            p {
               font-size: 0.95rem;
            }
         }
      }

      .bennifts {
         .about_bennifts {
            p {
               font-size: 0.95rem;
            }
         }
      }

      .mint {
         button {
            border:none;
            outline:none;
            border-radius:4px;
            padding: 0.7rem 2.4rem;
            color:white;
            font-size:1.1rem;
            background:#daa520;
            font-weight:600;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            letter-spacing:0.1rem;
            width:100%;
         }
      }

      .gallery{
         .imgSection {
            img {
               transition: all 0.5s ease-in-out;
               border-radius:10px;
               width:auto;
               height:18rem;
               
               &:hover {
                  cursor: pointer;
                  transform: scale(1.1);
                  transition: all 0.5s ease-in-out;
               }
             }
         }
        
      }
   }
`;

export default HomeWrapper;
