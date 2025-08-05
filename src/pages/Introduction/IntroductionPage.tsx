import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert
} from '@mui/material';
import {
  TrendingUp,
  AutoAwesome,
  Security,
  Analytics,
  Factory,
  Business,
  AdminPanelSettings,
  LaunchOutlined,
  CheckCircleOutline,
  Timeline,
  EmojiEvents,
  AttachMoney
} from '@mui/icons-material';

const IntroductionPage: React.FC = () => {
  const handleDemoLaunch = () => {
    window.open('https://carbonzero-sigma.vercel.app/', '_blank');
  };

  const features = [
    {
      icon: <TrendingUp />,
      title: '실시간 탄소배출 모니터링',
      description: '중부발전 발전소별 실시간 배출량 및 24시간 탄소집약도 예측'
    },
    {
      icon: <AutoAwesome />,
      title: 'AI 기반 자동매칭',
      description: 'RE100 기업의 탄소상쇄 요구사항과 청정전력 공급시간 자동 매칭'
    },
    {
      icon: <Security />,
      title: '블록체인 인증서',
      description: '탄소상쇄 거래 인증서 실시간 발급 및 QR코드 검증 시스템'
    },
    {
      icon: <Analytics />,
      title: '성과 분석 대시보드',
      description: '월별 탄소상쇄량, 비용 절감 효과, 파트너 기업 관리'
    }
  ];

  const scenarios = [
    {
      icon: <Factory />,
      title: '중부발전 발전소 관리자',
      items: [
        '실시간 탄소배출량 모니터링 (석탄발전 비중 최적화)',
        '24시간 탄소집약도 예측으로 청정전력 시간대 식별',
        '암모니아·바이오매스 혼소 최적 배합 알고리즘 활용'
      ]
    },
    {
      icon: <Business />,
      title: 'RE100 기업 ESG 담당자',
      items: [
        '탄소상쇄 목표 설정 (연간 500만톤 CO2 상쇄)',
        '자동매칭을 통한 중부발전 청정전력 확보',
        '블록체인 인증서 발급으로 ESG 공시 대응'
      ]
    },
    {
      icon: <AdminPanelSettings />,
      title: '중부발전 플랫폼 관리자',
      items: [
        '전체 탄소거래 현황 모니터링 (연간 5,000억원 규모)',
        '탄소배출 20% 감축 성과 분석 (1,000만톤 → 800만톤)',
        '300개 참여 기업 관리 및 수수료 수익 창출'
      ]
    }
  ];

  const quantitativeEffects = [
    '연간 거래 중개 수수료: 100억원',
    '중부발전 탄소배출 20% 감축: 1,000만톤 → 800만톤 CO2',
    '참여 기업 탄소중립: 300개 기업의 연간 500만톤 CO2 상쇄',
    '재생에너지 활용률 30% 향상',
    '일자리 창출: 200명'
  ];

  const qualitativeEffects = [
    '탄소중립 리더십 확립: 6개 발전사 중 탄소거래 선도 기업 도약',
    'ESG 경영 고도화: 환경(E) 분야 국내 최고 수준 달성',
    '미래 성장동력 확보: 기존 발전사업을 넘어선 플랫폼 기업 전환'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 헤더 섹션 */}
      <Box textAlign="center" mb={6}>
        <Chip 
          label="2025 KOMIPO 「혁신 50대 과제」 아이디어 공모전 제출용" 
          color="primary" 
          sx={{ mb: 2, fontSize: '0.9rem', fontWeight: 600 }}
        />
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          CarbonZero Platform
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          넷제로 달성을 위한 AI 기반 탄소 예측 및 상쇄 자동매칭 플랫폼
        </Typography>
        <Box mt={3}>
          <Chip label="②에너지 전환" color="secondary" sx={{ mr: 1 }} />
          <Chip label="AI 기반 탄소예측" color="info" sx={{ mr: 1 }} />
          <Chip label="자동매칭 플랫폼" color="success" />
        </Box>
        <Box mt={3}>
          <Button
            variant="contained"
            size="large"
            startIcon={<LaunchOutlined />}
            onClick={handleDemoLaunch}
            sx={{ 
              px: 4, 
              py: 1.5,
              background: 'linear-gradient(135deg, #00C851 0%, #00BCD4 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #00A142 0%, #0097A7 100%)',
              }
            }}
          >
            데모 사이트 체험하기
          </Button>
        </Box>
      </Box>

      {/* 개요 섹션 */}
      <Paper elevation={2} sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleOutline sx={{ mr: 2, color: 'success.main' }} />
          프로젝트 개요
        </Typography>
        <Typography variant="body1" paragraph>
          중부발전 전 발전소의 실시간 탄소배출량을 AI로 예측하고, RE100 기업과 자동 매칭하여 
          탄소상쇄 거래를 중개하는 플랫폼입니다.
        </Typography>
        <Typography variant="body1">
          발전소별 연료 혼소비율, 기상조건, 전력수요를 종합 분석하여 시간대별 탄소집약도를 예측하고 
          청정전력 공급시간 안내 서비스를 제공합니다.
        </Typography>
      </Paper>

      {/* 주요 기능 */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom textAlign="center">
          주요 기능 (KOMIPO 공모전 요구사항 완벽 구현)
        </Typography>
        <Grid container spacing={3} mt={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <IconButton 
                      color="primary" 
                      sx={{ 
                        background: 'linear-gradient(135deg, #00C851 0%, #00BCD4 100%)',
                        color: 'white',
                        mr: 2,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #00A142 0%, #0097A7 100%)',
                        }
                      }}
                    >
                      {feature.icon}
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 데모 시나리오 */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom textAlign="center">
          데모 시나리오 (KOMIPO 제안서 기반)
        </Typography>
        <Grid container spacing={3} mt={2}>
          {scenarios.map((scenario, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <IconButton color="primary" sx={{ mr: 2, background: 'primary.light', color: 'white' }}>
                      {scenario.icon}
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {scenario.title}
                    </Typography>
                  </Box>
                  <List dense>
                    {scenario.items.map((item, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleOutline color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ fontSize: '0.9rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 기대효과 */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom textAlign="center">
          <EmojiEvents sx={{ mr: 2, verticalAlign: 'middle' }} />
          KOMIPO 공모전 기대효과
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <AttachMoney sx={{ mr: 1, color: 'success.main' }} />
                  계량적 효과
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List dense>
                  {quantitativeEffects.map((effect, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Timeline color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={effect} 
                        primaryTypographyProps={{ fontSize: '0.9rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmojiEvents sx={{ mr: 1, color: 'warning.main' }} />
                  비계량적 효과
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List dense>
                  {qualitativeEffects.map((effect, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleOutline color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={effect} 
                        primaryTypographyProps={{ fontSize: '0.9rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 알림 박스 */}
      <Alert 
        severity="info" 
        sx={{ 
          mt: 4,
          '& .MuiAlert-message': {
            width: '100%'
          }
        }}
      >
        <Typography variant="h6" gutterBottom>
          🎯 완전한 기능 데모 프로토타입
        </Typography>
        <Typography variant="body2">
          이 프로토타입은 실제 API/DB 없이 완전한 기능을 시연할 수 있도록 Mock 데이터를 활용하여 구현되었습니다. 
          모든 주요 기능이 실제처럼 동작하며, KOMIPO 공모전 심사위원들이 직접 체험할 수 있는 완전한 데모를 제공합니다.
        </Typography>
      </Alert>
    </Container>
  );
};

export default IntroductionPage;