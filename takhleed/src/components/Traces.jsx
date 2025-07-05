import Image from 'next/image';
import styles, { layout } from '@/styles/style';

// Component constants
const TITLE = 'من هنا <br className="hidden md:flex"/> بدأ الأثر';
const PARAGRAPHS = [
  'حين لم يكن للجمال من يوثقه , وحين كانت الحكايات الجميلة تمضي بلا شاهد ولا أثر في - تخليد آمنا أن لكل قصة قيمة، ولكل لحظة معنى، تستحق أن تروى وتحفظ، لا لتسكن الذاكرة فحسب، بل لتلهم الأجيال تثرس الزمان والمكان',
  'التوثيق هو جذر رسالتنا , ومن خلاله نسهم في بناء مجتمعات تقدر الحكاية , وتطور كل ما يمس الإنسان و الفكر والأشياء. سنمضي بشغف, ونبذل ما نستطيع, لنعطي لكل جميل امتدادا, ولكل أثر بقاء'
];

const Traces = () => {
  const renderTitle = () => (
    <div className="flex-1 flex items-start">
      <h2 
        className={`font-handicrafts mr-0 md:mr-[35%] text-[#d0a571] font-bold text-[40px] md:text-[65px] leading-[55px] md:leading-[95px]`} 
        dangerouslySetInnerHTML={{ __html: TITLE }}
      />
    </div>
  );

  const renderContent = () => (
    <div className="flex-1 ml-0 md:ml-[10%] flex flex-col gap-2">
      {PARAGRAPHS.map((text, index) => (
        <p 
          key={index} 
          className={`${styles.paragraph2} font-handicrafts text-white`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ))}
    </div>
  );

  return (
    <section className={`${styles.padding} bg-brown3`}>
      <div className={`${layout.sectionRow} gap-4 w-full min-h-[400px]`}>
        {renderTitle()}
        {renderContent()}
      </div>
    </section>
  );
};

export default Traces;
