import React from 'react';
import FAQCard from './FAQCard';

const FAQ = () => {
    const faqs1 = [
        {
          question: "What is FirstStore?",
          answer:
            "It offers a wide range of tools for customizing store designs, managing inventory, processing payments, and marketing products to enhance your business's online presence.",
        },
        {
          question: "How easy is it to set up my store on FirstStore?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
            question: "Does FirstStore support mobile optimization?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
          },
          {
            question: "Can I manage my inventory on FirstStore?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
          },
          {
            question: "What payment methods are available on FirstStore?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
          },
      ];

      const faqs2 = [
        {
        question: "Can I offer discounts and promotions on FirstStore?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "Is FirstStore secure for transactions?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "Can I track my store's performance on FirstStore?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "Does FirstStore support multiple languages and currencies?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "What customer support options are available?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "Can I integrate FirstStore with other apps or tools?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
      ]
  return (
    <div className='flex flex-col justify-center items-center p-6 mb-12'>
        <h1 className='text-3xl text-[#081d6e] font-bold text-center py-12'>Discover FAQs,that are transorming the way <br /> we seek and share knowledge</h1>
        <div className='flex gap-4'>
            <div className='flex max-w-[50%] flex-col gap-4'>
                {faqs1.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            <div className='flex max-w-[50%] flex-col gap-4'>
                {faqs2.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default FAQ